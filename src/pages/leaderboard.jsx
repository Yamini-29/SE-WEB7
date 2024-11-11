import React from 'react';

const data = [
    { name: 'Jai', score: 92, pic: 'https://unsplash.it/60/60?1' },
    { name: 'Srikar', score: 85, pic: 'https://unsplash.it/60/60?2' },
    { name: 'Yamini', score: 80, pic: 'https://unsplash.it/60/60?3' },
    { name: 'Stany', score: 78, pic: 'https://unsplash.it/60/60?4' },
    { name: 'Sudhanva', score: 75, pic: 'https://unsplash.it/60/60?5' },
    { name: 'Aashik', score: 80, pic: 'https://unsplash.it/60/60?3' },
    { name: 'Shreya', score: 78, pic: 'https://unsplash.it/60/60?4' },
    { name: 'Dhruti', score: 75, pic: 'https://unsplash.it/60/60?5' },
  ];
const Leaderboard = () => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen py-10">
      <h1 className="text-3xl font-bold mb-8 text-orange-500">Leaderboard</h1>
      <div className="w-full max-w-lg bg-gray-900 rounded-lg shadow-md">
        
        {/* Top 3 Leaders */}
        <div className="flex justify-around py-6 bg-orange-500 rounded-t-lg text-black">
          {data.slice(0, 3).map((user, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={user.pic}
                alt={user.name}
                className={`rounded-full border-4 ${index === 0 ? 'border-orange-300 h-24 w-24' : 'border-gray-700 h-16 w-16'}`}
              />
              <p className="font-semibold mt-2 text-white">{user.name}</p>
              <p className="text-xs font-medium mt-1 text-gray-200">Score: {user.score}</p>
            </div>
          ))}
        </div>

        {/* Scrollable Leaderboard */}
        <div className="p-4 bg-black">
          {data.slice(3).map((user, index) => (
            <div key={index} className="flex items-center py-2 px-4 bg-gray-800 rounded-lg mb-2 shadow-sm">
              <p className="text-lg font-semibold w-8 text-center text-white">{index + 4}</p>
              <img
                src={user.pic}
                alt={user.name}
                className="rounded-full w-12 h-12 mx-4 border-2 border-gray-600"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-200">{user.name}</p>
              </div>
              <p className="text-sm font-medium bg-orange-500 text-black px-2 py-1 rounded-full">
                {user.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
