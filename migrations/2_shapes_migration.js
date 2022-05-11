var Migrations = artifacts.require("./Shapes.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
