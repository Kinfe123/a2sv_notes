import React from "react";

const SkeletonLoader = () => {
  return (
    <div className=" m-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
      {/* Your application content goes here */}
      <div className="animate-pulse bg-white rounded-lg shadow-lg">
        <div className="h-48 bg-gray-300 rounded-t-lg"></div>
        <div className="px-6 py-4">
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="h-4 my-4 bg-gray-300 rounded"></div>
          <div className="h-4 my-2 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;