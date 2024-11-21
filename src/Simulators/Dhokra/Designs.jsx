import React from "react";

function Sidebar({ onSelectVideo }) {
  const buttons = [
    { id: 1, label: "Melt Wax", video: "src/assets/wax.mp4", fact: "Wax is melted to create a moldable base for intricate designs." },
    { id: 2, label: "Mould", video: "src/assets/mould.mp4", fact: "A mould is created using the wax design to form a cavity." },
    { id: 3, label: "Pour metal into mould", video: "src/assets/metalpour.mp4", fact: "Molten metal is poured into the mould to create the final shape." },
    { id: 4, label: "Break the clay mould", video: "src/assets/last.mp4", fact: "The clay mould is broken to reveal the metal object." },
  ];

  return (
    <div className="bg-blue-100 h-screen w-1/4 flex flex-col gap-6 p-5 pt-20">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => onSelectVideo(button.video, button.fact)}
          className="bg-black text-white shadow-md rounded-lg px-4 py-2 hover:bg-gray-700 text-center"
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
