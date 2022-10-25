require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/pYfJDoXwRklOrt6zu066lpirnrJmO-fr",
      accounts: [`0x${"28b460c3252a389e7b10049e540f0be9d3924f9590a5c27c6cbcb4b64f32ac63"}`],
    },
  },
};
