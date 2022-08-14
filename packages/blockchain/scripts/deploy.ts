import { ethers } from "hardhat";
import { config } from "dotenv";

config();

async function main() {
	const WenPaycheck = await ethers.getContractFactory("WenPaycheck");
	const wenPaycheck = await WenPaycheck.deploy();

	await wenPaycheck.deployed();

	console.log("Greeter deployed to:", wenPaycheck.address);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
