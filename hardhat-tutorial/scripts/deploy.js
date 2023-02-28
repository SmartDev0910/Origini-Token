// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
require("dotenv").config();
const { NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const nftZoneNFTContract = NFT_CONTRACT_ADDRESS;

  const onigiriTokenContract = await ethers.getContractFactory("OnigiriToken");

  // deploy the contract
  const deployedOnigiriTokenContract = await onigiriTokenContract.deploy(
    nftZoneNFTContract
  );

  await deployedOnigiriTokenContract.deployed();

  // print the address of the deployed contract
  console.log(
    `Onigiri Token Contract Address: ${deployedOnigiriTokenContract.address}`
  );
}

// call the main function and catch if there's any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
