//@ts-nocheck
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import { HardhatUserConfig } from "hardhat/types";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
	defaultNetwork: "hardhat",
	solidity: {
		compilers: [{ version: "0.8.11", settings: {} }],
	},
	networks: {
		goerli: {
			accounts: [process.env.TEST_PRIVATE_KEY!],
			url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
		},
	},
};

export default config;
