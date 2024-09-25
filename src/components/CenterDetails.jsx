import React from "react";
import { useState } from "react";

function CenterDetails() {
  const [isLoading, setIsLoading] = useState(false);

  function DisplayMessage(event) {
    setIsLoading(true);
    console.log("Display message");
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl fixed w-[calc(60%-16rem)] left-65 top-40">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Company retreats
          </div>
          <a
            href="home#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Incredible accommodation for your team
          </a>
          <p className="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
          <button
            className="bg-blue-500 mt-3 hover:bg-blue-700 animate-pulse text-white font-bold py-2 px-4 rounded"
            onClick={() => DisplayMessage()}
          >
            Click me
          </button>
          <input
            type="text"
            placeholder="Enter your name"
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
        </div>
        {setIsLoading}
      </div>
    </div>
  );
}

export default CenterDetails;
