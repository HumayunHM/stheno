import React from "react";
import Image from "next/image"; // If you're using Next.js

const Article = () => {
  return (
    <div className="bg-[#101018] p-4 rounded-lg flex items-center space-x-4 w-96">
      {/* Image Section */}
      <div className="bg-gray-300 rounded-sm flex items-center justify-center overflow-hidden">
        <Image
          src="/Article.jpg" // Replace with your image path
          alt="Article Image"
          width={500} // Width of the image
          height={500} // Height of the image
          className="object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="text-white">
        <h2 className="text-lg font-bold mb-2">Delayed Gratification</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
        Delayed gratification is the ability to resist the temptation for an immediate reward in favor of a later, often more significant, benefit.
        </p>
      </div>
    </div>
  );
};

export default Article;
