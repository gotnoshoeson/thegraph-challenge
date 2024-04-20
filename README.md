# 🏗 Scaffold-ETH 2 - UUPS Patter - The Graph

This is a challenge submittal for The Graph team.

## The build

I've been researching upgradeable proxy standards and decided to build a UUPS starter guide as part of this challenge. This build is a clone of [that educational UUPS build](https://github.com/gotnoshoeson/se2-uups) for The Buidl Guidl, which is a clone of [a previous upgradeable proxy factory build](https://github.com/gotnoshoeson/se-transparent-proxy), which is a clone of the [scaffold-eth-2](https://github.com/scaffold-eth/scaffold-eth-2) repo.

### For the smart contracts:

I used OpenZeppelin contracts to implement the Universal Upgradeable Proxy Standard which includes an implementation contract and a factory contract to deploy proxies of the implementation contract; I modified the standard YourContract smart contract from the scaffold-eth-2 repo which allows users to update a greeting.

### For the frontend:

I made some changes to the scaffold-eth repo to be able to have a generated UI for every proxy deployed on chain. Scaffold-eth-2 provides a UI that is derived from the ABI that is created when deploying from hardhat or foundry, but when deploying contracts from a factory contract I needed a solution to interact with all proxy contracts.

[Deploy new contracts and add new greetings with the Next.js frontend](https://thegraph-challenge-nextjs.vercel.app/)

### For the subgraph:

I made some changes to the generated subgraph files to allow data templating which basically allows us to track events from the factory and from all proxy contracts created by the factory, all with one subgraph. Very neat feature for advanced smart contract setups.

[Interact with the subgraph data on Arbitrum](https://thegraph.com/explorer/subgraphs/32QTGAkUQNSXcWEkotAJh4WxB35rQNrYjPJPzkS1EK98?view=Overview&chain=arbitrum-one)


<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a> |
  <a href="https://eips.ethereum.org/EIPS/eip-1822">Ethereum EIP-1882 - UUPS</a>
</h4>


