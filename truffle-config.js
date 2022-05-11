const HDWalletProvider = require('truffle-hdwallet-provider')
const networks = {
  rinkeby: {
    provider: () =>
      new HDWalletProvider(
        `execute topic odor sniff strategy torch process palm feed faith kitchen cheese`,
        `https://rinkeby.infura.io/v3/26794b0125a74448afe527730d13f349`,
      ),
    network_id: 4,
    gas: 5500000,
    confirmations: 2,
    timeoutBlocks: 200,
    skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
  },
}
const mocha = {
  // timeout: 100000
}
const compilers = {
  solc: {
    version: '0.8.0', // Fetch exact version from solc-bin (default: truffle's version)
  },
}
module.exports = { networks, mocha, compilers }
