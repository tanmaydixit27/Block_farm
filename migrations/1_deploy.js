const CoffeeSupplyChain = artifacts.require("CoffeeSupplyChain.sol");

const SupplyChainStorage = artifacts.require("SupplyChainStorage.sol");

const SupplyChainUser = artifacts.require("SupplyChainUser.sol");

module.exports = async function (deployer, network, accounts) {
  //   let supplyChainStorage = await deployer.deploy(SupplyChainStorage);

  let addressStorage = "0x5E8A078c3005289dA24DC79f2d3BeabDFd599a6E";

  let userSupplyChain = deployer.deploy(SupplyChainUser, addressStorage);

  let coffeSupplyChain = deployer.deploy(CoffeeSupplyChain, addressStorage);
};
