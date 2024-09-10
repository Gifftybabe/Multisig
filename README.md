# Multisig Smart Contract

This project is a smart contract implementation of a multisignature wallet in Solidity. The contract allows multiple signers to manage and approve transactions, ensuring that a quorum of signers must approve a transaction before it can be executed. The contract also allows for updating the quorum with the approval of valid signers.

## Features

- **Multisignature Wallet:** Multiple valid signers must approve transactions before they are executed.
- **Quorum Management:** The contract allows for updating the quorum with the approval of the valid signers.
- **ERC20 Token Support:** The contract supports transactions involving ERC20 tokens.
- **Transaction Approval:** Each transaction requires approval from a specified number of signers (quorum) before execution.
- **Events:** The contract emits events when transactions are completed or when the quorum is updated.

## Smart Contract Overview

### Multisig Contract

- **Variables:**
  - `quorum`: The minimum number of signers required to approve a transaction.
  - `noOfValidSigners`: The total number of valid signers.
  - `txCount`: The total number of transactions initiated.

- **Structs:**
  - `Transaction`: Represents a transaction with the following fields:
    - `id`: The transaction ID.
    - `amount`: The amount of tokens to be transferred.
    - `sender`: The address of the signer who initiated the transaction.
    - `recipient`: The address of the recipient of the tokens.
    - `isCompleted`: A boolean indicating if the transaction is completed.
    - `newQuorum`: The new quorum to be set (only for quorum update transactions).
    - `timestamp`: The timestamp when the transaction was created.
    - `noOfApproval`: The number of signers who have approved the transaction.
    - `tokenAddress`: The address of the ERC20 token contract.
    - `transactionSigners`: An array of addresses of the signers who approved the transaction.

- **Mappings:**
  - `isValidSigner`: Maps an address to a boolean indicating if it is a valid signer.
  - `transactions`: Maps a transaction ID to a `Transaction` struct.
  - `hasSigned`: Maps a signer and transaction ID to a boolean indicating if the signer has approved the transaction.

- **Events:**
  - `TransferTransactionCompleted`: Emitted when a transfer transaction is successfully completed.
  - `UpdateQuorumTransactionCompleted`: Emitted when a quorum update transaction is successfully completed.

### Web3CXI Token Contract

- **Token:** This contract implements an ERC20 token named "WEB3CXI Token" with the symbol "WCXI".
- **Owner:** The contract assigns the deployer as the owner who can mint new tokens.

## How to Use

### 1. Deployment

1. Deploy the `Multisig` contract by providing the initial quorum and an array of valid signers.
2. Deploy the `Web3CXI` token contract if you need an ERC20 token to interact with the Multisig contract.

### 2. Create a Transaction

Call the `transfer` function on the `Multisig` contract to create a new transaction. The transaction must be approved by the required quorum before execution.

### 3. Approve a Transaction

Valid signers can approve a transaction by calling the `approveTx` function. Once the required quorum is reached, the transaction is executed.

### 4. Update the Quorum

To update the quorum, call the `updateQuorum` function. This also requires approval from the current valid signers. Once approved by the quorum, the new quorum is set.

### 5. Token Minting (Optional)

The `Web3CXI` token contract allows the owner to mint new tokens by calling the `mint` function.

## Example Workflow

1. **Deploy Multisig Contract:**
   - Deploy the `Multisig` contract with an initial quorum and valid signers.
2. **Deploy Web3CXI Token:**
   - Deploy the `Web3CXI` ERC20 token contract.
3. **Create Transfer Transaction:**
   - A valid signer calls `transfer` to initiate a token transfer.
4. **Approve Transaction:**
   - Other valid signers call `approveTx` to approve the transaction. Once the quorum is reached, the transaction is executed.
5. **Update Quorum:**
   - A signer calls `updateQuorum` with the new quorum value. Other signers approve the quorum update using `approveQuorumUpdateTx`.

## Requirements

- Solidity version 0.8.24 or later.
- OpenZeppelin Contracts for ERC20 token implementation.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Gifftybabe/Multisig.git
   cd Multisig
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile the contracts:

   ```bash
   npx hardhat compile
   ```

## Testing

Tests are written using Hardhat's testing framework with Chai for assertions. The test cases simulate various scenarios like creating and approving transactions, verifying valid signers, and updating the quorum.

