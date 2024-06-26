const {
  BOND_ABI,
  chainStringToId,
  generateCreateArgs,
  getMintClubContractAddress,
  wei,
  mintclub,
} = require('mint.club-v2-sdk');
const { createWalletClient, custom, http, publicActions } = require('viem');
const { mainnet, sepolia, baseSepolia, lineaTestnet, optimismSepolia, scrollSepolia } = require('viem/chains')
const { privateKeyToAccount }  = require('viem/accounts')

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

async function deployNFT(name, symbol, maxSupply, chainId) {
  try {
    const account = privateKeyToAccount(pk)
    var client 
    var chain

    if (chainId == '84532'){
      chain = baseSepolia
      client = createWalletClient({
        account,
        chain: chain,
        transport: http('https://sepolia.base.org')
      }).extend(publicActions)
    }else  if (chainId == '59144'){
      chain = lineaTestnet
      client = createWalletClient({
        account,
        chain: chain,
        transport: http('https://sepolia.base.org')
      }).extend(publicActions)
    }else  if (chainId == '11155420'){
      chain = optimismSepolia
      client = createWalletClient({
        account,
        chain: chain,
        transport: http('https://sepolia.base.org')
      }).extend(publicActions)
    }else  if (chainId == '534351'){
      chain = scrollSepolia
      client = createWalletClient({
        account,
        chain: chain,
        transport: http('https://sepolia.base.org')
      }).extend(publicActions)
    }else  if (chainId == '48899'){
      chain = {
        name : "Zircuit",
        id: 48899
      }
      client = createWalletClient({
        account,
        chain: chain,
        transport: http('https://sepolia.base.org')
      }).extend(publicActions)
    }else{
      chain = sepolia
      client = createWalletClient({
        account,
        chain: chain,
        transport: http('https://sepolia.base.org')
      }).extend(publicActions)
    }
    

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
    await MortyMee6Nft.nft(symbol).create({
      name: name,
      // Base Network WETH
      reserveToken: {
        address: '0xb16f35c0ae2912430dac15764477e179d9b9ebea',
        decimals: 18,
      },
      // Bonding curve data
      curveData : {
        curveType: 'EXPONENTIAL',
        stepCount: 5, // how granular the curve is
        maxSupply: 10_000, // NFT max supply
        initialMintingPrice: 0.01, // starting price, 0.01 WETH
        finalMintingPrice: 0.1, // ending price, 0.1 WETH
        creatorAllocation: 100, // initial supply to the deployer
      },
      metadataUrl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura1.jpg',
      onSuccess: function(receipt) {
        // Your logic here
        console.log('s1: ' + receipt);
      },
      onError: (error) => {
        console.error('e1', error);
      } 
    }, value=400000);

 
    console.log('NFT deployed successfully.');
  } catch (error) {
    console.error('Error deploying NFT:', error);
  }
}

async function nftMint() {
  await mintclub.network(chain.id).token('0x0b697d5d7265969b80b7a004eae551b9953f69a3').sell({
    amount: 1,
    recipient: '0x348b735403992203a768751c32871E2e4f462Bc7',
    onSuccess: function(receipt) {
      // Your logic here
      console.log('s2: ' + receipt);
    },
    onError: (error) => {
      console.error('e2', error);
    } 
  })

  console.log('NFT minted successfully.');
}

async function getElementByIdotalSupply () {
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
router.get('/create', exampleMiddleware, (req, res) => {
   // Call the function to deploy the NFT
   nftMint();
   res.json("Test End");
});

router.get('/', exampleMiddleware, (req, res) => {
   // Retrieve query parameters
   const name = req.query.name;
   const symbol = req.query.symbol;
   const maxSupply = req.query.maxSupply;
   const chainId = req.query.symbol;

    // Call the function to deploy the NFT
    deployNFT(name, symbol, maxSupply, chainId);
    res.json("Test deployNFT End");
});

router.get('/gettotalsupply', exampleMiddleware, (req, res) => {
   // Call the function to deploy the NFT
   getElementByIdotalSupply();
   res.json("Test gettotalsupply End");
});

module.exports = router;