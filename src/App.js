import { Alchemy, Network, Utils } from "alchemy-sdk";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import BlockContainer from "./components/BlockContainer";
import TxnContainer from "./components/TxnContainer";

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
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [blockTransactions, setBlockTransactions] = useState([]);
  const entriesToShow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(searchValue);
  };

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  useEffect(() => {
    async function getBlockData() {
      await alchemy.core
        .getBlockWithTransactions(blockNumber)
        .then((response) => {
          setBlockTransactions(response.transactions);
        });
    }
    getBlockData();
  }, [blockNumber]);

  useEffect(() => {
    if (blockTransactions.length) {
      setIsLoading(false);
    }
  }, [blockTransactions]);

  return (
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
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex">
          <div>
            <h1 className="text-lg font-medium mb-2">Latest Blocks</h1>
            {entriesToShow.map((num, i) => (
              <BlockContainer blockNumber={blockNumber} num={num} key={i} />
            ))}
          </div>
          <div className="ml-20">
            <h1 className="text-lg font-medium mb-2">Latest Transactions</h1>
            {blockTransactions.slice(0, 10).map((transaction, i) => (
              <TxnContainer key={i} transaction={transaction} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
