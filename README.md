

# MultiSig and Token Contracts

This repository contains smart contracts for a MultiSig Wallet and an ERC20 Token, both deployed on the Lisk Sepolia testnet.

## Contracts Overview

### 1. **MultiSig Contract**
The MultiSig contract allows multiple signers to approve transactions. A quorum is set, and transactions require approval from a specified number of signers before execution. It also allows for proposing and approving quorum updates.

- **Contract Address on Lisk Sepolia Testnet**: `0x34C28447972e10d107C99a95a743Cb8622611A04`
- **Functions:**
  - `transfer`: Create a new transaction that needs approval.
  - `approveTx`: Approve a transaction.
  - `proposeAndApproveQuorum`: Propose and approve a quorum update.
  - `getOneTransaction`: Retrieve details of a specific transaction by ID.

### 2. **Token Contract**
The ERC20 Token contract creates an initial supply of 100,000 tokens and allows the owner to mint additional tokens.

- **Token Name**: `Token`
- **Token Symbol**: `TKN`
- **Contract Address on Lisk Sepolia Testnet**: `0x25EFdf2b5165d828499c6fa1729A82238B818924`
- **Functions:**
  - `mint`: Allows the contract owner to mint new tokens.

### 3. **MultisigFactory Contract**
The MultisigFactory contract is responsible for creating new instances of the MultiSig wallet.

- **Contract Address on Lisk Sepolia Testnet**: `0x34C28447972e10d107C99a95a743Cb8622611A04`
- **Functions:**
  - `createMultisigWallet`: Create a new MultiSig wallet.
  - `getMultiSigClones`: View all deployed MultiSig wallets.

## Deployment Information

All contracts have been deployed on the Lisk Sepolia testnet.

- **MultiSig Factory Contract**: `0x34C28447972e10d107C99a95a743Cb8622611A04`
- **Token Contract**: `0x25EFdf2b5165d828499c6fa1729A82238B818924`

## How to Use

### 1. **MultiSig Wallet**
- Deploy the `MultiSig` contract using the factory contract.
- Interact with the wallet to create transactions, approve them, and manage quorum updates.

### 2. **Token**
- Use the `Token` contract to manage token minting. Only the owner can mint new tokens.

### 3. **MultisigFactory**
- Create new instances of the `MultiSig` contract by calling the `createMultisigWallet` function with the required quorum and signers.

