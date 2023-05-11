// https://eth-goerli.g.alchemy.com/v2/43asFqte2KmriprzYQggAM3fWAADvjO3

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/43asFqte2KmriprzYQggAM3fWAADvjO3',
      accounts: ['852253bf00bf19333ed0071833f95b450fe614527012579f99343f2f2888e910'],
    },
  },
};