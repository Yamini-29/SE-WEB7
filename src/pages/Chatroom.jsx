import React, { useEffect, useState, useRef } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';
import 'animate.css'; // Ensure animate.css is included for animations
import { formatDistanceToNow } from 'date-fns';

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [alias, setAlias] = useState('');
  const [password, setPassword] = useState('');
  const [userAlias, setUserAlias] = useState(null);
  const [isCreatingAlias, setIsCreatingAlias] = useState(false);
  const [error, setError] = useState('');
  const [messageWarning, setMessageWarning] = useState('');
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const messagesRef = collection(db, 'messages');
  
  // Admin credentials
  const adminAlias = 'Admin';
  const adminPassword = 'This is not the password';

  // Fetch messages from Firestore and listen for updates
  useEffect(() => {
    const messagesQuery = query(messagesRef, orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const newMessages = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          text: data.text,
          alias: data.alias,
          createdAt: data.createdAt || null, // Ensure createdAt is not null
        };
      });
      setMessages(newMessages); // Update messages state
    });

    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);

  // Format timestamp using `date-fns`
  const formatTimestamp = (timestamp) => {
    if (!timestamp) {
      return 'Unknown time'; // Return a default message if the timestamp is missing
    }
    return formatDistanceToNow(timestamp.toDate(), { addSuffix: true });
  };

  // Handle sending a new message
  const sendMessage = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!input.trim()) {
      setError('Message cannot be empty');
      return;
    }

    if (input.length > 210) {
      setMessageWarning('Message exceeds 210 characters. Please shorten it.');
      return;
    }

    if (userAlias) {
      try {
        await addDoc(messagesRef, {
          text: input,
          alias: userAlias,
          createdAt: serverTimestamp(), // Ensure a timestamp is set
        });

        // Clear the input and reset the error
        setInput('');
        setMessageWarning('');
        setError('');
        inputRef.current.focus(); // Focus back on input after sending
      } catch (error) {
        console.error("Error adding document: ", error);
        setError('Failed to send message. Please try again later.');
      }
    } else {
      setError('You need to be logged in to send messages');
    }
  };

  // Handle alias creation
  const handleAliasSubmit = (e) => {
    e.preventDefault();
    if (alias.trim() && password.trim()) {
      const storedPassword = localStorage.getItem(alias);
      if (storedPassword) {
        alert('Alias already exists. Please choose a different alias.');
      } else {
        localStorage.setItem(alias, password);
        setUserAlias(alias);
        setAlias('');
        setPassword('');
      }
    }
  };

  // Handle login with an existing alias
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Check if the alias is "Admin" and the password is correct
    if (alias === adminAlias && password === adminPassword) {
      setUserAlias(adminAlias);
      setAlias('');
      setPassword('');
    } else {
      const storedPassword = localStorage.getItem(alias);
      if (storedPassword === password) {
        setUserAlias(alias);
        setAlias('');
        setPassword('');
      } else {
        alert('Invalid alias or password. Please try again.');
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    setUserAlias(null);
  };

  // Handle deleting a message (only for Admin)
  const handleDeleteMessage = async (messageId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'messages', messageId));
        console.log(`Message with ID ${messageId} deleted.`);
      } catch (error) {
        console.error("Error deleting message: ", error);
        setError('Failed to delete message. Please try again later.');
      }
    }
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // Runs when messages change

  // Function to break the text into lines of 35 characters
  const formatMessageText = (text) => {
    let result = '';
    const maxCharsPerLine = 35;
    for (let i = 0; i < text.length; i += maxCharsPerLine) {
      result += text.substring(i, i + maxCharsPerLine) + '\n';
    }
    return result;
  };

  // If user is not logged in, show alias creation/login form
  if (!userAlias) {
    return (
      <div className="bg-gray-900 min-h-screen flex justify-center items-center">
        <div className="chatroom p-6 bg-opacity-80 bg-white/10 rounded-lg shadow-xl w-full max-w-lg animate__animated animate__fadeIn animate__duration-500">
          <h2 className="text-4xl font-bold py-4 text-gray-100 text-center animate__animated animate__fadeIn animate__duration-500">Community</h2>
          <h3 className="text-gray-300 py-2 text-center mb-4 animate__animated animate__fadeIn animate__duration-500">Please keep the community kind and respectful</h3>

          {!isCreatingAlias ? (
            <form onSubmit={handleLoginSubmit} className="flex flex-col items-center animate__animated animate__fadeIn animate__duration-500">
              <input 
                type="text" 
                value={alias} 
                onChange={(e) => setAlias(e.target.value)} 
                placeholder="Enter your alias..." 
                required 
                className="mb-3 p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
              />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password..." 
                required 
                className="mb-3 p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
              />
              <button type="submit" className="btn mb-3 py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                Login
              </button>
              <p>
                <button className="text-gray-400 text-sm" type="button" onClick={() => setIsCreatingAlias(true)}>
                  Create Alias
                </button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleAliasSubmit} className="flex flex-col items-center animate__animated animate__fadeIn animate__duration-500">
              <input 
                type="text" 
                value={alias} 
                onChange={(e) => setAlias(e.target.value)} 
                placeholder="Enter your alias..." 
                required 
                className="mb-3 p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
              />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password..." 
                required 
                className="mb-3 p-3 bg-gray-800 text-white border border-gray-600 rounded-md"
              />
              <button type="submit" className="btn mb-3 py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                Create Alias
              </button>
              <p>
                <button className="text-gray-400 text-sm" type="button" onClick={() => setIsCreatingAlias(false)}>
                  Back to Login
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    );
  }

  // If user is logged in, show chatroom UI
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="chatroom p-6 bg-opacity-80 bg-white/10 rounded-lg shadow-xl w-full max-w-lg animate__animated animate__fadeIn animate__duration-500">
        <h2 className="text-4xl font-bold py-4 text-gray-100 text-center animate__animated animate__fadeIn animate__duration-500">Community</h2>
        <h3 className="text-gray-300 py-2 text-center mb-4 animate__animated animate__fadeIn animate__duration-500">Please keep the community kind and respectful</h3>

        <div className="messages max-h-96 overflow-y-auto mb-4 p-4 bg-gray-700 text-gray-300 rounded-lg border border-gray-600 mx-auto w-full animate__animated animate__fadeIn animate__duration-500">
          {messages.length > 0 ? (
            messages.map(message => (
              <div key={message.id} className="message mb-2 p-2 rounded-md bg-gray-600 animate__animated animate__fadeIn animate__duration-500">
                <strong className="text-yellow-400">{message.alias}:</strong> {formatMessageText(message.text)}
                <span className="text-gray-400 text-sm ml-2">{formatTimestamp(message.createdAt)}</span>

                {userAlias === adminAlias && (
                  <button 
                    onClick={() => handleDeleteMessage(message.id)} 
                    className="ml-3 py-1 px-3 bg-red-500 hover:bg-red-600 text-white rounded-md"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-400">No messages yet.</p>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={sendMessage} className="message-input flex items-center justify-between mt-4 animate__animated animate__fadeIn animate__duration-500">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Type a message..." 
            required 
            ref={inputRef}
            maxLength={210}
            className="flex-1 p-3 bg-gray-800 text-white border border-gray-600 rounded-md mr-3"
          />
          <button type="submit" className="btn py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg" disabled={!input.trim()}>
            Send
          </button>
        </form>

        {messageWarning && <p className="text-yellow-500 mt-2">{messageWarning}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button onClick={handleLogout} className="mt-4 py-2 px-6 bg-red-500 hover:bg-red-600 text-white rounded-lg animate__animated animate__fadeIn animate__duration-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Chatroom;
