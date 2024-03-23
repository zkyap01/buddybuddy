const { mintclub } = require('mint.club-v2-sdk');

const MortyMee6Nft = mintclub.network('base').nft('MnM-NFT');

async function deployNFT(addresses, name) {
  try {
    // 🚀 Deploying $MNM-NFT tokens
    await MortyMee6Nft.create({
      name: name,
      // Base Network WETH
      reserveToken: {
        address: '0x4200000000000000000000000000000000000006',
        decimals: 18,
      },
      // Bonding curve data
      curveData: {
        curveType: 'EXPONENTIAL',
        stepCount: 10, // how granular the curve is
        maxSupply: 10_000, // NFT max supply
        initialMintingPrice: 0.01, // starting price, 0.01 WETH
        finalMintingPrice: 0.1, // ending price, 0.1 WETH
        creatorAllocation: 100, // initial supply to the deployer
      },
      metadataUrl: 'ipfs://...'
    });

    console.log('NFT deployed successfully.');
  } catch (error) {
    console.error('Error deploying NFT:', error);
  }
}

const express = require('express');
const router = express.Router();

// Middleware function
const exampleMiddleware = (req, res, next) => {
  console.log('Example middleware');
  next();
};

// Route to get all users
router.get('/', exampleMiddleware, (req, res) => {
   // Retrieve query parameters
   const addresses = req.query.addresses;
   const name = req.query.name;

    // Call the function to deploy the NFT
    deployNFT(addresses, name);
    res.json("Test End");
});

module.exports = router;