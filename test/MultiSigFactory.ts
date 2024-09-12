import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
  import { expect } from "chai";
  import hre, { ethers } from "hardhat";
  import { assert } from "ethers";

  describe("MultiSignature Factory", function(){

    async function deployFactory() {
        const [ owner, addr1, addr2, addr3, addr4 ] = await hre.ethers.getSigners();
        const Factory = await hre.ethers.getContractFactory("MultisigFactory");
        const multisigFactory = await Factory.deploy();
        const signers = [ addr1, addr2, addr3];
        return { multisigFactory, owner, signers }
    }

    describe("Create Wallet Clone", function(){

        it("Should not allow zero quorum", async function(){
            const {multisigFactory, owner, signers} = await loadFixture(deployFactory);
            await expect(multisigFactory.createMultisigWallet(3, signers)).to.not.be.revertedWith("Invalid Quorum");
        });

        it("Should check if signers is not less than quorom", async function(){
            const {multisigFactory, owner, signers} = await loadFixture(deployFactory);
            await expect(multisigFactory.createMultisigWallet(3, signers)).to.not.be.revertedWith("Insufficient Signers");
        });

        it("Should check if clones was created successfully", async function(){
            const {multisigFactory, owner, signers} = await loadFixture(deployFactory);
            await expect(multisigFactory.createMultisigWallet(2, signers)).to.not.be.reverted;
        });
    
    
    });

    describe ("Checking wallet clone", function() {
        it('should check if clones were gotten successfully', async function() {
            const { multisigFactory} = await loadFixture(deployFactory);
            await expect(multisigFactory.getMultiSigClones()).to.not.be.reverted;
        })
    })

  });

