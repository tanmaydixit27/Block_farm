const CoffeeSupplyChain = artifacts.require("CoffeeSupplyChain.sol");

const SupplyChainStorage = artifacts.require("SupplyChainStorage.sol");

const SupplyChainUser = artifacts.require("SupplyChainUser.sol");

let storageSupply;
let userSupply;
let supply;

contract("Testing Supply Chain Contract ", async (accounts) => {
  let authorisedUser = accounts[0];
  let farmInspector = accounts[1];
  let harvestor = accounts[2];
  let exporter = accounts[3];
  let importer = accounts[4];

  beforeEach(async () => {
    storageSupply = await SupplyChainStorage.new({ from: authorisedUser });
    userSupply = await SupplyChainUser.new(storageSupply.address, {
      from: authorisedUser,
    });
    supply = await CoffeeSupplyChain.new(storageSupply.address, {
      from: authorisedUser,
    });

    
  });

  it("Should Deploy", () => {});
});
