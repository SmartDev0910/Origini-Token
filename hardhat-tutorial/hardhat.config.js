require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    "mantle-testnet": {
      url: process.env.MANTLE_DEPLOYMENT_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
