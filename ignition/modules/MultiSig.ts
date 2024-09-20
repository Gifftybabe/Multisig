import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
  import { expect } from "chai";
  import hre, { ethers } from "hardhat";
  import { assert } from "ethers";

const MultiSigModule = buildModule("MultiSigModule", (m) => {

const accounts =  hre.ethers.getSigners();
const addresses: string[] = [];

for (let i = 0; i < 3; i++) {
    const address =  accounts[i].getAddress();
    addresses.push(address);
}

console.log(addresses);





const MultiSig = m.contract("MultiSig", []);

  return { MultiSig };
});

export default MultiSigModule;