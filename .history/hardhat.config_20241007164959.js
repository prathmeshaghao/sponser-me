require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

console.log(SEPOLIA_URL, PRIVATE_KEY);

if (!SEPOLIA_URL || !PRIVATE_KEY) {
  console.error("Missing SEPOLIA_URL or PRIVATE_KEY in .env file");
  process.exit(1); // Exit if not properly defined
}

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  // etherscan: {
  //   apiKey: "SEPOLIA_API_KEY",
  // },
};
