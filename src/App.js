import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

import "./App.css";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // make a call to the API here using the searchValue
    // to retrieve data for the specific block number
    // axios
    //   .get(`https://api.etherscan.io/api?module=block&action=getblockreward&blockno=${searchValue}`)
    //   .then(response => {
    //     setBlockData(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  return (
    <>
      <div className="App">Block Number: {blockNumber}</div>
      <div className="bg-gray-900 text-white min-h-screen p-8">
        <h1 className="text-3xl font-medium mb-4">Block Explorer</h1>
        <form className="mb-4 max-w-max flex" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium mb-2" htmlFor="search">
            Search for a block:
          </label>
          <input
            className="bg-gray-800 rounded-lg p-2 text-white w-full"
            type="text"
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Enter a block number"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Search
          </button>
        </form>
        {1 === 1 && (
          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-2">
              Block Number: {blockNumber}
            </h2>
            <h2 className="text-lg font-medium mb-2">Block Reward: </h2>
            <h2 className="text-lg font-medium mb-2">Gas Used: </h2>
            <h2 className="text-lg font-medium mb-2">Gas Limit: </h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
