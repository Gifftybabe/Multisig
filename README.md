

# MultiSig Wallet & Token Management Smart Contracts

## Overview

This project consists of a collection of Solidity smart contracts that provide functionality for a multi-signature wallet and a token management system. The primary features include multi-sig transaction approval, quorum updates, and a token contract with minting capabilities.

### Contracts

1. **MultiSig Contract**
   - Manages multi-signature transactions where a group of signers must approve a transaction before execution.
   - Handles ERC20 token transfers with quorum-based approval.
   - Allows proposals to update the quorum dynamically with approval from valid signers.

2. **MultiSig Factory Contract**
   - Provides the ability to deploy multiple instances of the `MultiSig` wallet contract.
   - Keeps track of deployed wallet instances for easy access.

3. **Token Contract**
   - Implements an ERC20-compliant token using OpenZeppelin’s `ERC20` standard.
   - Includes minting functionality, allowing the contract owner to create new tokens.

## Features

### MultiSig Contract

- **Transaction Approval:**
  - Requires a quorum of signers to approve transactions before they are executed.
  - Supports ERC20 token transfers.

- **Quorum Update:**
  - A proposal system allows valid signers to propose and approve changes to the transaction approval quorum.
  
- **Transaction Management:**
  - Keep track of transaction details, approvals, and completion status.
  - Provides methods to fetch individual transactions.

### MultiSig Factory Contract

- **Wallet Deployment:**
  - Allows users to deploy multiple instances of the `MultiSig` wallet with a specified quorum and signers.

- **Cloning:**
  - Keeps track of deployed wallet instances for later retrieval.

### Token Contract

- **Token Minting:**
  - The owner of the contract can mint new tokens as required.
  
- **ERC20 Compliance:**
  - Fully compliant with the ERC20 standard for fungible tokens.

