const {
  BOND_ABI,
  chainStringToId,
  generateCreateArgs,
  getMintClubContractAddress,
  mintclub,
} = require('mint.club-v2-sdk');
const { createWalletClient, custom, http, publicActions } = require('viem');
const { mainnet, sepolia } = require('viem/chains')
const { privateKeyToAccount } = require('viem/accounts')
const { Web3 } = require('web3')

const pk = '0x85a322fb25868a549ec231c9e2531c64ca5f22099bd7c9f7e79bc6a8aeea116c'
const address = '0x1671aad14B578C74259b682fac2111845BD0964D'
const chain = 11155111
const tmpname = "zkkks"

// const { tokenParams, bondParams } = generateCreateArgs({
//   name: tmpname,
//   reserveToken: {
//     address: '0xb16f35c0ae2912430dac15764477e179d9b9ebea',
//     decimals: 18,
//   },
//   tmpname:tmpname,
//   tokenType: 'ERC20',
//   curveData: {
//     curveType: 'EXPONENTIAL',
//     stepCount: 10, // how granular the curve is
//     maxSupply: 10_000, // NFT max supply
//     initialMintingPrice: 0.01, // starting price, 0.01 WETH
//     finalMintingPrice: 0.1, // ending price, 0.1 WETH
//     creatorAllocation: 100, // initial supply to the deployer
//   },
// });


// This is your RPC provider URL, for example, Infura or Alchemy URL for Goerli
const rpcProviderUrl = 'https://rpc.sepolia.org';

// Create a Web3 instance and set the provider
const web3 = new Web3(new Web3.providers.HttpProvider(rpcProviderUrl));

// Create an account from the private key
const account = web3.eth.accounts.privateKeyToAccount(pk);
web3.eth.accounts.wallet.add(account);

// const account = privateKeyToAccount(pk)
const client = createWalletClient({
  account,
  chain: sepolia,
  transport: http(rpcProviderUrl)

}).extend(publicActions)


const MortyMee6Nft = mintclub
  // .network(chain)
  .withWalletClient(client)
  // .withAccount('0x1671aad14B578C74259b682fac2111845BD0964D', window.ethereum) 
  // .withAccount(address, window.sepolia)
  // .withPrivateKey(pk)
  // .withWalletClient({   
  //   // account: address,  
  //   transport: [
  //     'https://rpc.sepolia.ethpandaops.io',
  //     'https://eth-sepolia-public.unifra.io',
  //     'https://endpoints.omniatech.io/v1/eth/sepolia/public',
  //     'https://ethereum-sepolia.publicnode.com',
  //     'https://eth-sepolia.public.blastapi.io',
  //     'https://rpc.notadegen.com/eth/sepolia',
  //     'https://eth-sepolia.api.onfinality.io/public',
  //     'https://rpc-sepolia.rockx.com',
  //     'https://rpc.sepolia.org',
  //     'https://rpc2.sepolia.org',
  //     'https://sphinx.shardeum.org',
  //   ]
  // }) 
  .nft('MnM-NFT');

async function deployNFT(addresses, name) {
  try {
    // const creationFee = await mintclub.network('sepolia').bond.getCreationFee();

    // client.writeContract({
    //     abi: BOND_ABI,
    //     chainId: sepolia.id,
    //     functionName: 'createToken',
    //     to: getMintClubContractAddress('BOND', sepolia.id),
    //     args: [tokenParams, bondParams],
    //     value: creationFee,
    // });
  

    // 🚀 Deploying $MNM-NFT tokens
    await MortyMee6Nft.create({
      name: tmpname,
      // Base Network WETH
      reserveToken: {
        address: '0xb16f35c0ae2912430dac15764477e179d9b9ebea',
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
      metadataUrl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura.jpg',
      onSuccess: function (receipt) {
        // Your logic here
        console.log('s1: ' + receipt);
      },
      onError: (error) => {
        console.error('e1', error);
      }
    });

    console.log('NFT deployed successfully.');
  } catch (error) {
    console.error('Error deploying NFT:', error);
  }
}

async function getElementByIdotalSupply() {
  const totalSupply = await mintclub
    .network(chain)
    .withPrivateKey(pk)
    .token(address)
    .getTotalSupply()

  console.log("haha");
  console.log(totalSupply);

  // const publicClient = await mintclub.network('base').getPublicClient()
  // console.log(publicClient);
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