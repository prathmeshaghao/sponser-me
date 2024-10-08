require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load environment variables from .env file

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!SEPOLIA_URL || !PRIVATE_KEY) {
  console.error("Missing SEPOLIA_URL or PRIVATE_KEY in .env file");
  process.exit(1); // Exit if not properly defined
}

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${PRIVATE_KEY}`], // Ensure PRIVATE_KEY is prefixed with 0x
    },
  },
  // etherscan: {
  //   apiKey: process.env.SEPOLIA_API_KEY, // Use an API key for contract verification
  // },
};
