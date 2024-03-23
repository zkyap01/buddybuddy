import { mintclub } from 'mint.club-v2-sdk';

const MortyMee6Nft = mintclub.network('base').nft('MnM-NFT');

// 🚀 Deploying $MNM-NFT tokens
MortyMee6Nft.create({
    name: 'Morty and Mee6',
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