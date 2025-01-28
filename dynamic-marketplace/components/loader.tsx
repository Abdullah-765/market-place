import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-black border-r-black border-b-white border-l-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;