import React from "react";

const TxnContainer = (props) => {
  console.log('props', props)
  return (
    <div className="bg-gray-800 rounded-lg p-4 basis-1/2 mb-2">
      <h2 className="text-lg font-medium mb-2">
        Block Transactions:{" "}
      </h2>
    </div>
  );
};

export default TxnContainer;
