require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL, // Access SEPOLIA_URL directly from process.env
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Access PRIVATE_KEY directly from process.env and prefix with 0x
    },
  },
  // etherscan: {
  //   apiKey: process.env.SEPOLIA_API_KEY, // Use Etherscan API key for contract verification (if needed)
  // },
};
