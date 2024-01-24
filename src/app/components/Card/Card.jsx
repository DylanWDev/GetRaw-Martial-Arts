import React from "react";

export default function Card({ imageUrl, title, description, buttonText }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl w-80 backdrop-blur-sm bg-stone-800/40">
      <img
        className="w-full p-5 rounded-lg opacity-100"
        src={imageUrl}
        alt="filler"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        <button className="hire-me rounded-lg transition hover:bg-violet-600 text-white font-semibold py-2 px-4 border border-gray-400  shadow">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
