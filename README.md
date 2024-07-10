# Cryptography in Node.js using the Crypto Library

This repository demonstrates various cryptographic operations in Node.js using the built-in `crypto` library. The examples include symmetric encryption, hashing, HMAC, and digital signatures.

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Examples](#examples)
  - [Symmetric Encryption](#symmetric-encryption)
  - [Hashing](#hashing)
  - [HMAC](#hmac)
  - [Digital Signatures](#digital-signatures)
- [Usage](#usage)


## Introduction

Cryptography is essential for securing data in applications. This repository provides examples of how to use the `crypto` library in Node.js to perform various cryptographic operations.

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/cryptography-nodejs.git
    cd cryptography-nodejs
    ```

2. Install dependencies (if any):
    ```sh
    npm install
    ```

## Examples

### Symmetric Encryption

Symmetric encryption uses the same key for both encryption and decryption. The example in `symmetricEncryption.js` demonstrates how to encrypt and decrypt a message using the AES-256 algorithm.

### Hashing

Hashing is the process of converting data into a fixed-size string of characters, which is typically a hash value. The example in `hash.js` shows how to create a SHA-256 hash of a string.

### HMAC

HMAC (Hash-based Message Authentication Code) is a type of message authentication code that involves a cryptographic hash function and a secret key. The example in `hmac.js` demonstrates how to create and verify an HMAC.

### Digital Signatures

Digital signatures provide a way to verify the authenticity and integrity of a message. The example in `signing.js` shows how to sign data with a private key and verify it with a public key using RSA-SHA256.

## Usage

To run any of the examples, use the following command:
```sh
node <filename>
```

For example, to run the symmetric encryption example:
```sh
node symmetricEncryption.js
```


