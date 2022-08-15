## Smart contract starter

This is a simple monorepo to get you started with deploying your own smart contract.

## Requirements

- [pnpm](https://pnpm.js.org/)
- [Node.js](https://nodejs.org/)
- A Goerli testnet private key: [see tutorial](https://portal.thirdweb.com/guides/create-a-metamask-wallet)
- An [Alchemy](https://www.alchemy.com/) private key: [see tutorial](https://docs.alchemy.com/docs/alchemy-quickstart-guide)

## Usage:

1. Add your Goerli and Alchemy private keys to the [.env.example](/packages/blockchain/.env.example).
1. Rename the `.env.example` to `.env`.
1. Run `pnpm install` to install the dependencies.
1. Run `pnpm run build` to build the project and generate types for your smart contract.
1. Run `pnpm deploy` to deploy the smart contract.
1. Host the UI on [Vercel](https://vercel.com)

## Stack:

All relevant packages and apps are under [/packages](./packages/). The root only has 1 dependency: [TurboRebo](https://turborepo.org/).

### UI

The UI is kept minimal to let choose your favorite tooling.

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)

### Blockchain

The blockchain package is opiniated and implements my favorite tooling:

- [Jest](https://jestjs.io/)
- [Hardhat](https://hardhat.org/)
- [Typechain](https://github.com/dethcrypto/TypeChain)
