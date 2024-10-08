require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load environment variables from .env file

console.log(SEPOLIA_URL, PRIVATE_KEY);

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL, // Access SEPOLIA_URL directly from process.env
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Access PRIVATE_KEY directly from process.env and prefix with 0x
    },
  },
};

console.log(SEPOLIA_URL, PRIVATE_KEY);
