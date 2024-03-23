const { mintclub } = require('mint.club-v2-sdk');
const { fallback } = require( 'viem')

const pk = '0x85a322fb25868a549ec231c9e2531c64ca5f22099bd7c9f7e79bc6a8aeea116c'
const chain = 11155111
const tmpname = "zkkks"

const MortyMee6Nft = mintclub.network(chain)
  // .withAccount('0x1671aad14B578C74259b682fac2111845BD0964D', window.ethereum) 
  // .withPrivateKey(pk)
  .nft('MnM-NFT');

async function deployNFT(addresses, name) {
  try {
    // 🚀 Deploying $MNM-NFT tokens
    await MortyMee6Nft.create({
      name: tmpname,
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
      metadataUrl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg'
    });

    console.log('NFT deployed successfully.');
  } catch (error) {
    console.error('Error deploying NFT:', error);
  }
}

async function getElementByIdotalSupply () {
  const totalSupply = await mintclub 
    .network(chain) 
    .withPrivateKey(pk)
    .token(tmpname) 
    .getTotalSupply() 
 
  console.log("haha");
  console.log(totalSupply);

  const publicClient = await mintclub.network('base').getPublicClient()
  console.log(publicClient);
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


router.get('/gettotalsupply', exampleMiddleware, (req, res) => {
   // Call the function to deploy the NFT
   getElementByIdotalSupply();
   res.json("Test gettotalsupply End");
});

module.exports = router;