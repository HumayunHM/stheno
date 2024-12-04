import React from "react";

const Exercises = () => {
  return (
    <div className="px-16 py-16">
      <h1 className="text-[#222F3E] text-3xl font-bold">Willpower Exercises</h1>
      <p className="text-[#222F3E]  text-lg font-bold opacity-80 mb-16 ml-1">
        Research-proven exercises to gain discipline and self-control.
      </p>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-[#AF7AD5] h-48 rounded-lg"></div>
        <div className="bg-[#AF7AD5] h-48 rounded-lg"></div>
        <div className="bg-[#AF7AD5] h-48 rounded-lg"></div>
        <div className="bg-[#AF7AD5] h-48 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Exercises;
