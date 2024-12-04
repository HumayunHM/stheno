import React from "react";

const Articles = () => {
  return (
    <div className="px-16 py-16">
      <h1 className="text-[#222F3E] text-3xl font-bold">Articles</h1>
      <p className="text-[#222F3E] text-lg font-bold opacity-80 mb-16 ml-1">
        Attain self-control by learning about the concepts of willpower.
      </p>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-[#101018] h-48 rounded-lg"></div>
        <div className="bg-[#101018] h-48 rounded-lg"></div>
        <div className="bg-[#101018] h-48 rounded-lg"></div>
        <div className="bg-[#101018] h-48 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Articles;
