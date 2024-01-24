import React from "react";

const Loading = () => {
  return (
    <div className="fixed flex h-96 items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-blue-400 ease-linear"></div>
      <div className="ml-3 h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-yellow-400 ease-linear"></div>
      <div className="ml-3 h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-red-400 ease-linear"></div>
    </div>
  );
};

export default Loading;
