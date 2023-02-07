import React from "react";

const TxnContainer = ({ transaction }) => {
  console.log('transaction', transaction)
  return (
    <div className="bg-gray-800 rounded-lg p-4 basis-1/2 mb-2">
      <h2 className="text-lg font-medium mb-2">
        Block Transactions:{" "}
        {`${transaction.hash.slice(0, 5)}...${transaction.hash.slice(60)}`}
      </h2>
    </div>
  );
};

export default TxnContainer;
