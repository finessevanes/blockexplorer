import React from "react";

const BlockContainer = ({ blockNumber, num}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 basis-1/2 mb-2">
      <h2 className="text-lg font-medium mb-2">
        Block Number: {blockNumber - num}
      </h2>
    </div>
  );
};

export default BlockContainer;
