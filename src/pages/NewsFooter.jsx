import React, { useState } from 'react';

export default function CulturalFooter() {
  const [email, setEmail] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isSlidingOut, setIsSlidingOut] = useState(false);

  const handleJoinCommunity = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsSlidingOut(true); // Start slide-out animation
      setTimeout(() => {
        setIsSlidingOut(false); // Reset animation state
        setIsVerified(true); // Show success message

        // Set a timer to revert back to the input form after 5 seconds
        setTimeout(() => {
          setIsSlidingOut(true); // Start slide-out animation for success message
          setTimeout(() => {
            setIsSlidingOut(false); // Reset animation state
            setIsVerified(false); // Show input form again
          }, 500); // Duration to match CSS transition for fade-out
        }, 5000);
      }, 500); // Match duration with CSS animation
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 py-10 px-6 flex justify-center items-center space-x-8">
      {/* Left Image */}
      <div className="hidden md:block">
        <img
          src="src/assets/footer.png" // Replace with the correct image path
          alt="Artistic Graphic"
          className="w-40 h-40 rounded-lg"
        />
      </div>

      {/* Center Content */}
      <div
        className={`flex flex-col items-center space-y-4 w-full max-w-lg transition-opacity transform duration-700 ease-in-out ${
          isSlidingOut ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
        }`}
      >
        {isVerified ? (
          // Success Message with Fade-In and Slide-Up Animation
          <div className="flex flex-col items-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="green"
              viewBox="0 0 24 24"
              className="w-12 h-12"
            >
              <path d="M9 16.2l-3.5-3.5-1.4 1.4 4.9 4.9 12-12-1.4-1.4-10.6 10.6z" />
            </svg>
            <h3 className="text-xl font-semibold">Successfully Sent!</h3>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              Connect with Cultural Heritage
            </h2>

            {/* Email and Join Community Button */}
            <div className="relative w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full py-3 pl-4 pr-16 bg-gray-800 rounded-full border-none outline-none text-gray-300"
              />
              <button
                onClick={handleJoinCommunity}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 5l7 7-7 7v-4H4v-6h8V5z" />
                </svg>
              </button>
            </div>

            <p className="text-sm mt-4 text-center md:text-left">
              By joining, you support the preservation of cultural heritage and
              agree to publish a new artifact on our website!
            </p>
          </>
        )}
      </div>
    </div>
  );
}
