import React, { useEffect, useState, useRef } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import './chatroom.css';

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [alias, setAlias] = useState('');
  const [password, setPassword] = useState('');
  const [userAlias, setUserAlias] = useState(null);
  const [isCreatingAlias, setIsCreatingAlias] = useState(false);
  const messagesEndRef = useRef(null);

  const messagesRef = collection(db, 'messages');

  useEffect(() => {
    const messagesQuery = query(messagesRef, orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const newMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() && userAlias) {
      await addDoc(messagesRef, {
        text: input,
        alias: userAlias,
        createdAt: serverTimestamp()
      });
      setInput('');
    }
  };

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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const storedPassword = localStorage.getItem(alias);
    if (storedPassword === password) {
      setUserAlias(alias);
      setAlias('');
      setPassword('');
    } else {
      alert('Invalid alias or password. Please try again.');
    }
  };

  return (
    <div className={`bg-gray-900 min-h-screen flex ${userAlias ? 'chatroom-container' : 'flex-col justify-center items-center'}`}>
      <div className={`chatroom mb-10 ${userAlias ? 'expanded' : 'centered'}`}>
        <h2 className="text-4xl font-bold py-4 text-gray-100 text-center">Community</h2>
        <h3 className="text-gray-300 py-2 text-center mb-4">Please keep the community kind and respectful</h3>
        {!userAlias ? (
          <form onSubmit={isCreatingAlias ? handleAliasSubmit : handleLoginSubmit} className="alias-input flex flex-col items-center">
            <input 
              type="text" 
              value={alias} 
              onChange={(e) => setAlias(e.target.value)} 
              placeholder="Enter your alias..." 
              required 
            />
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password..." 
              required 
            />
            <button className="btn my-3" type="submit">
              {isCreatingAlias ? 'Create Alias' : 'Login'}
            </button>
            <p>
              {isCreatingAlias ? (
                <button className="text-gray" type="button" onClick={() => setIsCreatingAlias(false)}>Back to Login</button>
              ) : (
                <button className="text-gray" type="button" onClick={() => setIsCreatingAlias(true)}>Create Alias</button>
              )}
            </p>
          </form>
        ) : (
          <div className='px-5'>
            <div className="messages mb-4 px-[3%]">
              {messages.length > 0 ? (
                messages.map(message => (
                  <div key={message.id} className="message text-gray-300">
                    <strong>{message.alias}:</strong> {message.text}
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No messages yet.</p>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={sendMessage} className="message-input flex">
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Type a message..." 
                required 
              />
              <button type="submit" className="btn">Send</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatroom;
