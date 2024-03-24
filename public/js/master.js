const navPage = `
    <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container" style="max-width: 540px;">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a id='btnChangeSetUp' class="nav-link active" href="setup.html">Create Project</a>
                    </li>
                    <li class="nav-item">
                        <a id='btnChangeStore' class="nav-link active" href="javascript:;" onclick="changeTabStore">Upload</a>
                    </li>
                    <li class="nav-item">
                        <a id='btnChangeReward' class="nav-link active" href="javascript:;" onclick="changeTab">Reward</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `

const divNavPage = document.getElementById("divNavPage")
if (divNavPage) {
    var child = document.createElement('div');
    child.innerHTML = navPage.toString();
    divNavPage.appendChild(child);
}

const mintclub_url = "//45.76.188.177:3000/mintclub/"

const chainlist = {
    "ethereum": {
      "explorerName": "Etherscan",
      "explorerLink": "https://etherscan.io",
      "favicon": "",
      "api": "https://api.etherscan.io/api"
    },
    "eth": {
      "explorerName": "Etherscan",
      "explorerLink": "https://etherscan.io",
      "favicon": "",
      "api": "https://api.etherscan.io/api"
    },
    "1": {
      "explorerName": "Etherscan",
      "explorerLink": "https://etherscan.io",
      "favicon": "",
      "api": "https://api.etherscan.io/api"
    },
    "goerli": {
      "explorerName": "Etherscan (Goerli)",
      "explorerLink": "https://goerli.etherscan.io",
      "favicon": "",
      "api": "https://api-goerli.etherscan.io/api"
    },
    "5": {
      "explorerName": "Etherscan (Goerli)",
      "explorerLink": "https://goerli.etherscan.io",
      "favicon": "",
      "api": "https://api-goerli.etherscan.io/api"
    },
    "sepolia": {
      "explorerName": "Etherscan (Sepolia)",
      "explorerLink": "https://sepolia.etherscan.io",
      "favicon": "",
      "api": "https://api-sepolia.etherscan.io/api"
    },
    "11155111": {
      "explorerName": "Etherscan (Sepolia)",
      "explorerLink": "https://sepolia.etherscan.io",
      "favicon": "",
      "api": "https://api-sepolia.etherscan.io/api"
    },
    "holesky": {
      "explorerName": "Etherscan (Holesky)",
      "explorerLink": "https://holesky.etherscan.io",
      "favicon": "",
      "api": "https://api-holesky.etherscan.io/api"
    },
    "17000": {
      "explorerName": "Etherscan (Holesky)",
      "explorerLink": "https://holesky.etherscan.io",
      "favicon": "",
      "api": "https://api-holesky.etherscan.io/api"
    },
    "bsc": {
      "explorerName": "Bscscan",
      "explorerLink": "https://bscscan.com",
      "favicon": "",
      "api": "https://api.bscscan.com/api"
    },
    "56": {
      "explorerName": "Bscscan",
      "explorerLink": "https://bscscan.com",
      "favicon": "",
      "api": "https://api.bscscan.com/api"
    },
    "bsc-testnet": {
      "explorerName": "Bscscan (testnet)",
      "explorerLink": "https://testnet.bscscan.com",
      "favicon": "",
      "api": "https://api-testnet.bscscan.com/api"
    },
    "97": {
      "explorerName": "Bscscan (testnet)",
      "explorerLink": "https://testnet.bscscan.com",
      "favicon": "",
      "api": "https://api-testnet.bscscan.com/api"
    },
    "fantom": {
      "explorerName": "Ftmscan",
      "explorerLink": "https://ftmscan.com",
      "favicon": "",
      "api": "https://api.ftmscan.com/api"
    },
    "ftm": {
      "explorerName": "Ftmscan",
      "explorerLink": "https://ftmscan.com",
      "favicon": "",
      "api": "https://api.ftmscan.com/api"
    },
    "250": {
      "explorerName": "Ftmscan",
      "explorerLink": "https://ftmscan.com",
      "favicon": "",
      "api": "https://api.ftmscan.com/api"
    },
    "fantom-testnet": {
      "explorerName": "Ftmscan (testnet)",
      "explorerLink": "https://testnet.ftmscan.com",
      "favicon": "",
      "api": "https://api-testnet.ftmscan.com/api"
    },
    "ftm-testnet": {
      "explorerName": "Ftmscan (testnet)",
      "explorerLink": "https://testnet.ftmscan.com",
      "favicon": "",
      "api": "https://api-testnet.ftmscan.com/api"
    },
    "4002": {
      "explorerName": "Ftmscan (testnet)",
      "explorerLink": "https://testnet.ftmscan.com",
      "favicon": "",
      "api": "https://api-testnet.ftmscan.com/api"
    },
    "optimism": {
      "explorerName": "Optimism Explorer",
      "explorerLink": "https://optimistic.etherscan.io",
      "favicon": "",
      "api": "https://api-optimistic.etherscan.io/api"
    },
    "op": {
      "explorerName": "Optimism Explorer",
      "explorerLink": "https://optimistic.etherscan.io",
      "favicon": "",
      "api": "https://api-optimistic.etherscan.io/api"
    },
    "10": {
      "explorerName": "Optimism Explorer",
      "explorerLink": "https://optimistic.etherscan.io",
      "favicon": "",
      "api": "https://api-optimistic.etherscan.io/api"
    },
    "optimism-testnet": {
      "explorerName": "Optimism Explorer (Sepolia)",
      "explorerLink": "https://sepolia-optimism.etherscan.io",
      "favicon": "",
      "api": "https://api-sepolia-optimism.etherscan.io/api"
    },
    "11155420": {
      "explorerName": "Optimism Explorer (Sepolia)",
      "explorerLink": "https://sepolia-optimism.etherscan.io",
      "favicon": "",
      "api": "https://api-sepolia-optimism.etherscan.io/api"
    },
    "op-testnet": {
      "explorerName": "Optimism Explorer (Sepolia)",
      "explorerLink": "https://sepolia-optimism.etherscan.io",
      "favicon": "",
      "api": "https://api-sepolia-optimism.etherscan.io/api"
    },
    "polygon": {
      "explorerName": "Polygonscan",
      "explorerLink": "https://polygonscan.com",
      "favicon": "",
      "api": "https://api.polygonscan.com/api"
    },
    "matic": {
      "explorerName": "Polygonscan",
      "explorerLink": "https://polygonscan.com",
      "favicon": "",
      "api": "https://api.polygonscan.com/api"
    },
    "137": {
      "explorerName": "Polygonscan",
      "explorerLink": "https://polygonscan.com",
      "favicon": "",
      "api": "https://api.polygonscan.com/api"
    },
    "mumbai-testnet": {
      "explorerName": "Polygonscan (Mumbai)",
      "explorerLink": "https://mumbai.polygonscan.com",
      "favicon": "",
      "api": "https://api-testnet.polygonscan.com/api"
    },
    "mumbai": {
      "explorerName": "Polygonscan (Mumbai)",
      "explorerLink": "https://mumbai.polygonscan.com",
      "favicon": "",
      "api": "https://api-testnet.polygonscan.com/api"
    },
    "80001": {
      "explorerName": "Polygonscan (Mumbai)",
      "explorerLink": "https://mumbai.polygonscan.com",
      "favicon": "",
      "api": "https://api-testnet.polygonscan.com/api"
    },
    "arbitrum-one": {
      "explorerName": "Arbiscan (One)",
      "explorerLink": "https://arbiscan.io",
      "favicon": "",
      "api": "https://api.arbiscan.io/api"
    },
    "arbi": {
      "explorerName": "Arbiscan (One)",
      "explorerLink": "https://arbiscan.io",
      "favicon": "",
      "api": "https://api.arbiscan.io/api"
    },
    "42161": {
      "explorerName": "Arbiscan (One)",
      "explorerLink": "https://arbiscan.io",
      "favicon": "",
      "api": "https://api.arbiscan.io/api"
    },
    "arbitrum-nova": {
      "explorerName": "Arbiscan (Nova)",
      "explorerLink": "https://nova.arbiscan.io",
      "favicon": "",
      "api": "https://api-nova.arbiscan.io/api"
    },
    "nova": {
      "explorerName": "Arbiscan (Nova)",
      "explorerLink": "https://nova.arbiscan.io",
      "favicon": "",
      "api": "https://api-nova.arbiscan.io/api"
    },
    "42170": {
      "explorerName": "Arbiscan (Nova)",
      "explorerLink": "https://nova.arbiscan.io",
      "favicon": "",
      "api": "https://api-nova.arbiscan.io/api"
    },
    "arbitrum-testnet": {
      "explorerName": "Arbiscan (testnet)",
      "explorerLink": "https://testnet.arbiscan.io",
      "favicon": "",
      "api": "https://api-testnet.arbiscan.io/api"
    },
    "arbi-testnet": {
      "explorerName": "Arbiscan (testnet)",
      "explorerLink": "https://testnet.arbiscan.io",
      "favicon": "",
      "api": "https://api-testnet.arbiscan.io/api"
    },
    "421611": {
      "explorerName": "Arbiscan (testnet)",
      "explorerLink": "https://testnet.arbiscan.io",
      "favicon": "",
      "api": "https://api-testnet.arbiscan.io/api"
    },
    "arbi-sepolia": {
      "explorerName": "Arbiscan (sepolia)",
      "explorerLink": "https://sepolia.arbiscan.io",
      "favicon": "",
      "api": "https://api-sepolia.arbiscan.io/api"
    },
    "421614": {
      "explorerName": "Arbiscan (sepolia)",
      "explorerLink": "https://sepolia.arbiscan.io",
      "favicon": "",
      "api": "https://api-sepolia.arbiscan.io/api"
    },
    "moonbeam": {
      "explorerName": "Moonscan (Moonbeam)",
      "explorerLink": "https://moonbeam.moonscan.io",
      "favicon": "",
      "api": "https://api-moonbeam.moonscan.io/api"
    },
    "1284": {
      "explorerName": "Moonscan (Moonbeam)",
      "explorerLink": "https://moonbeam.moonscan.io",
      "favicon": "",
      "api": "https://api-moonbeam.moonscan.io/api"
    },
    "moonriver": {
      "explorerName": "Moonscan (Moonriver)",
      "explorerLink": "https://moonriver.moonscan.io",
      "favicon": "",
      "api": "https://api-moonriver.moonscan.io/api"
    },
    "1285": {
      "explorerName": "Moonscan (Moonriver)",
      "explorerLink": "https://moonriver.moonscan.io",
      "favicon": "",
      "api": "https://api-moonriver.moonscan.io/api"
    },
    "moonbase": {
      "explorerName": "Moonscan (Moonbase)",
      "explorerLink": "https://moonbase.moonscan.io/",
      "favicon": "",
      "api": "https://api-moonbase.moonscan.io/api"
    },
    "1287": {
      "explorerName": "Moonscan (Moonbase)",
      "explorerLink": "https://moonbase.moonscan.io/",
      "favicon": "",
      "api": "https://api-moonbase.moonscan.io/api"
    },
    "avalanche": {
      "explorerName": "SnowScan",
      "explorerLink": "https://snowscan.xyz",
      "favicon": "",
      "api": "https://api.snowscan.xyz/api"
    },
    "avax": {
      "explorerName": "SnowScan",
      "explorerLink": "https://snowscan.xyz",
      "favicon": "",
      "api": "https://api.snowscan.xyz/api"
    },
    "43114": {
      "explorerName": "SnowScan",
      "explorerLink": "https://snowscan.xyz",
      "favicon": "",
      "api": "https://api.snowscan.xyz/api"
    },
    "fuji-testnet": {
      "explorerName": "SnowScan (Fuji)",
      "explorerLink": "https://testnet.snowscan.xyz",
      "favicon": "",
      "api": "https://api-testnet.snowscan.xyz/api"
    },
    "fuji": {
      "explorerName": "SnowScan (Fuji)",
      "explorerLink": "https://testnet.snowscan.xyz",
      "favicon": "",
      "api": "https://api-testnet.snowscan.xyz/api"
    },
    "43113": {
      "explorerName": "SnowScan (Fuji)",
      "explorerLink": "https://testnet.snowscan.xyz",
      "favicon": "",
      "api": "https://api-testnet.snowscan.xyz/api"
    },
    "cronos": {
      "explorerName": "Cronoscan",
      "explorerLink": "https://cronoscan.com",
      "favicon": "",
      "api": "https://api.cronoscan.com/api"
    },
    "cro": {
      "explorerName": "Cronoscan",
      "explorerLink": "https://cronoscan.com",
      "favicon": "",
      "api": "https://api.cronoscan.com/api"
    },
    "25": {
      "explorerName": "Cronoscan",
      "explorerLink": "https://cronoscan.com",
      "favicon": "",
      "api": "https://api.cronoscan.com/api"
    },
    "bttc": {
      "explorerName": "Bttcscan",
      "explorerLink": "https://bttcscan.com",
      "favicon": "",
      "api": "https://api.bttcscan.com/api"
    },
    "199": {
      "explorerName": "Bttcscan",
      "explorerLink": "https://bttcscan.com",
      "favicon": "",
      "api": "https://api.bttcscan.com/api"
    },
    "donau-testnet": {
      "explorerName": "Bttcscan (Donau)",
      "explorerLink": "https://testnet.bttcscan.com",
      "favicon": "",
      "api": "https://api-testnet.bttcscan.com/api"
    },
    "1029": {
      "explorerName": "Bttcscan (Donau)",
      "explorerLink": "https://testnet.bttcscan.com",
      "favicon": "",
      "api": "https://api-testnet.bttcscan.com/api"
    },
    "celo": {
      "explorerName": "Celoscan",
      "explorerLink": "https://celoscan.io",
      "favicon": "",
      "api": "https://api.celoscan.io/api"
    },
    "42220": {
      "explorerName": "Celoscan",
      "explorerLink": "https://celoscan.io",
      "favicon": "",
      "api": "https://api.celoscan.io/api"
    },
    "alfajores-testnet": {
      "explorerName": "Celoscan (Alfajores)",
      "explorerLink": "https://alfajores.celoscan.io",
      "favicon": "",
      "api": "https://api-alfajores.celoscan.io/api"
    },
    "alfajores": {
      "explorerName": "Celoscan (Alfajores)",
      "explorerLink": "https://alfajores.celoscan.io",
      "favicon": "",
      "api": "https://api-alfajores.celoscan.io/api"
    },
    "44787": {
      "explorerName": "Celoscan (Alfajores)",
      "explorerLink": "https://alfajores.celoscan.io",
      "favicon": "",
      "api": "https://api-alfajores.celoscan.io/api"
    },
    "gnosis": {
      "explorerName": "GnosisScan",
      "explorerLink": "https://gnosisscan.io",
      "favicon": "",
      "api": "https://api.gnosisscan.io/api"
    },
    "100": {
      "explorerName": "GnosisScan",
      "explorerLink": "https://gnosisscan.io",
      "favicon": "",
      "api": "https://api.gnosisscan.io/api"
    },
    "polygon-zkevm": {
      "explorerName": "Polygonscan zkEVM",
      "explorerLink": "https://zkevm.polygonscan.com",
      "favicon": "",
      "api": "https://api-zkevm.polygonscan.com/api"
    },
    "1101": {
      "explorerName": "Polygonscan zkEVM",
      "explorerLink": "https://zkevm.polygonscan.com",
      "favicon": "",
      "api": "https://api-zkevm.polygonscan.com/api"
    },
    "polygon-zkevm-testnet": {
      "explorerName": "Polygonscan zkEVM (testnet)",
      "explorerLink": "https://testnet-zkevm.polygonscan.com",
      "favicon": "",
      "api": "https://api-testnet-zkevm.polygonscan.com/api"
    },
    "1442": {
      "explorerName": "Polygonscan zkEVM (testnet)",
      "explorerLink": "https://testnet-zkevm.polygonscan.com",
      "favicon": "",
      "api": "https://api-testnet-zkevm.polygonscan.com/api"
    },
    "polygon-cardona-testnet": {
      "explorerName": "Polygonscan zkEVM (Cardona testnet)",
      "explorerLink": "https://cardona-zkevm.polygonscan.com/",
      "favicon": "",
      "api": "https://https://api-cardona-zkevm.polygonscan.com/api"
    },
    "2442": {
      "explorerName": "Polygonscan zkEVM (Cardona testnet)",
      "explorerLink": "https://cardona-zkevm.polygonscan.com/",
      "favicon": "",
      "api": "https://https://api-cardona-zkevm.polygonscan.com/api"
    },
    "base": {
      "explorerName": "BaseScan",
      "explorerLink": "https://basescan.org",
      "favicon": "",
      "api": " https://api.basescan.org/api"
    },
    "8453": {
      "explorerName": "BaseScan",
      "explorerLink": "https://basescan.org",
      "favicon": "",
      "api": " https://api.basescan.org/api"
    },
    "base-sepolia": {
      "explorerName": "BaseScan (testnet)",
      "explorerLink": "https://sepolia.basescan.org",
      "favicon": "",
      "api": "https://api-sepolia.basescan.org/api"
    },
    "base-testnet": {
      "explorerName": "BaseScan (testnet)",
      "explorerLink": "https://sepolia.basescan.org",
      "favicon": "",
      "api": "https://api-sepolia.basescan.org/api"
    },
    "84532": {
      "explorerName": "BaseScan (testnet)",
      "explorerLink": "https://sepolia.basescan.org",
      "favicon": "",
      "api": "https://api-sepolia.basescan.org/api"
    },
    "linea": {
      "explorerName": "LineaScan",
      "explorerLink": "https://lineascan.build",
      "favicon": "",
      "api": "https://api.lineascan.build/api"
    },
    "59144": {
      "explorerName": "LineaScan",
      "explorerLink": "https://lineascan.build",
      "favicon": "",
      "api": "https://api.lineascan.build/api"
    },
    "linea-testnet": {
      "explorerName": "LineaScan (testnet)",
      "explorerLink": "https://goerli.lineascan.build",
      "favicon": "",
      "api": "https://api-testnet.lineascan.build/api"
    },
    "59140": {
      "explorerName": "LineaScan (testnet)",
      "explorerLink": "https://lineascan.build",
      "favicon": "",
      "api": "https://api-testnet.lineascan.build/api"
    },
    "scroll": {
      "explorerName": "ScrollScan",
      "explorerLink": "https://scrollscan.dev",
      "favicon": "",
      "api": "https://api.scrollscan.dev/api"
    },
    "534352": {
      "explorerName": "ScrollScan",
      "explorerLink": "https://scrollscan.dev",
      "favicon": "",
      "api": "https://api.scrollscan.dev/api"
    },
    "scroll-testnet": {
      "explorerName": "ScrollScan (testnet)",
      "explorerLink": "https://sepolia.scrollscan.dev",
      "favicon": "",
      "api": "https://api-sepolia.scrollscan.dev/api"
    },
    "534351": {
      "explorerName": "ScrollScan (testnet)",
      "explorerLink": "https://sepolia.scrollscan.dev",
      "favicon": "",
      "api": "https://api-sepolia.scrollscan.dev/api"
    },
    "wemix": {
      "explorerName": "WemixScan",
      "explorerLink": "https://wemixscan.com",
      "favicon": "",
      "api": "https://api.wemixscan.com/api"
    },
    "1111": {
      "explorerName": "WemixScan",
      "explorerLink": "https://wemixscan.com",
      "favicon": "",
      "api": "https://api.wemixscan.com/api"
    },
    "wemix-testnet": {
      "explorerName": "WemixScan (testnet)",
      "explorerLink": "https://testnet.wemixscan.com",
      "favicon": "",
      "api": "https://api-testnet.wemixscan.com/api"
    },
    "1112": {
      "explorerName": "WemixScan (testnet)",
      "explorerLink": "https://testnet.wemixscan.com",
      "favicon": "",
      "api": "https://api-testnet.wemixscan.com/api"
    },
    "zksync": {
      "explorerName": "zkSync Era Explorer",
      "explorerLink": "https://era.zksync.network/",
      "favicon": "",
      "api": "https://api-era.zksync.network/api"
    },
    "324": {
      "explorerName": "zkSync Era Explorer",
      "explorerLink": "https://era.zksync.network",
      "favicon": "",
      "api": "https://api-era.zksync.network/api"
    },
    "zksync-sepolia": {
      "explorerName": "zkSync Era Sepolia Explorer",
      "explorerLink": "https://sepolia-era.zksync.network/",
      "favicon": "",
      "api": "https://api-sepolia-era.zksync.network/api"
    },
    "300": {
      "explorerName": "zkSync Era Sepolia Explorer",
      "explorerLink": "https://sepolia-era.zksync.network",
      "favicon": "",
      "api": "https://api-sepolia-era.zksync.network/api"
    },
    "kroma": {
      "explorerName": "Kromascan",
      "explorerLink": "https://kromascan.com/",
      "favicon": "",
      "api": "https://api.kromascan.com/api"
    },
    "255": {
      "explorerName": "Kromascan",
      "explorerLink": "https://kromascan.com/",
      "favicon": "",
      "api": "https://api.kromascan.com/api"
    },
    "kroma-testnet": {
      "explorerName": "Kromascan (testnet)",
      "explorerLink": "https://sepolia.kromascan.com/",
      "favicon": "",
      "api": "https://api-sepolia.kromascan.com/api"
    },
    "2358": {
      "explorerName": "Kromascan (testnet)",
      "explorerLink": "https://sepolia.kromascan.com/",
      "favicon": "",
      "api": "https://api-sepolia.kromascan.com/api"
    },
    "opbnb": {
      "explorerName": "opBNB",
      "explorerLink": "https://opbnb.bscscan.com",
      "favicon": "",
      "api": "https://api-opbnb.bscscan.com/api"
    },
    "204": {
      "explorerName": "opBNB",
      "explorerLink": "https://opbnb.bscscan.com",
      "favicon": "",
      "api": "https://api-opbnb.bscscan.com/api"
    },
    "opbnb-testnet": {
      "explorerName": "opBNB (testnet)",
      "explorerLink": "https://opbnb-testnet.bscscan.com",
      "favicon": "",
      "api": "https://api-opbnb-testnet.bscscan.com/api"
    },
    "5611": {
      "explorerName": "opBNB (testnet)",
      "explorerLink": "https://opbnb-testnet.bscscan.com",
      "favicon": "",
      "api": "https://api-opbnb-testnet.bscscan.com/api"
    },
    "mantle-sepolia": {
      "explorerName": "MantleScan (testnet)",
      "explorerLink": "https://sepolia.mantlescan.xyz/",
      "favicon": "",
      "api": "https://api-sepolia.mantlescan.xyz/api"
    },
    "5003": {
      "explorerName": "MantleScan (testnet)",
      "explorerLink": "https://sepolia.mantlescan.xyz/",
      "favicon": "",
      "api": "https://api-sepolia.mantlescan.xyz/api"
    },
    "fraxtal": {
      "explorerName": "Fraxscan",
      "explorerLink": "https://fraxscan.com/",
      "favicon": "",
      "api": "https://api.fraxscan.com/api"
    },  
    "252": {
      "explorerName": "Fraxscan",
      "explorerLink": "https://fraxscan.com/",
      "favicon": "",
      "api": "https://api.fraxscan.com/api"
    },
    "fraxtal-holesky": {
      "explorerName": "Fraxscan (testnet)",
      "explorerLink": "https://holesky.fraxscan.com/",
      "favicon": "",
      "api": "https://api-holesky.fraxscan.com/api"
    },
    "2522": {
      "explorerName": "Fraxscan (testnet)",
      "explorerLink": "https://holesky.fraxscan.com/",
      "favicon": "",
      "api": "https://api-holesky.fraxscan.com/api"
    },
    "blast": {
      "explorerName": "Blastscan",
      "explorerLink": "https://blastscan.io/",
      "favicon": "",
      "api": "https://api.blastscan.com/api"
    },  
    "81457": {
      "explorerName": "Blastscan",
      "explorerLink": "https://blastscan.io/",
      "favicon": "",
      "api": "https://api.blastscan.com/api"
    },
    "blast-sepolia": {
      "explorerName": "Blastscan (testnet)",
      "explorerLink": "https://sepolia.blastscan.io/",
      "favicon": "",
      "api": "https://api-sepolia.blastscan.com/api"
    },
    "168587773": {
      "explorerName": "Blastscan (testnet)",
      "explorerLink": "https://sepolia.blastscan.io/",
      "favicon": "",
      "api": "https://api-sepolia.blastscan.com/api"
    }
  }