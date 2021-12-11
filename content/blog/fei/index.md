---
title: Fei
date: "2021-12-09T22:12:09.284Z"
description: ""
category: "Stablecoins"
---

At launch, Fei wanted to introduce three mechanisms to enforce the peg of their stablecoin:

1. **Protocol-controlled value** - Fei distributes new Fei via **bonding curves**. These are buy-only mechanisms where people can buy new Fei using some asset like ETH. They cannot sell. The price of Fei starts low at the beginning and increases to ~$1 given enough purchases. The intent is to build reserves in other assets that will ultimately secure the price of Fei.
2. **Peg reweights** - This is a way of using their reserve. ETH comes from the bonding curves and Fei mints new FEI to pair up for ETH/FEI liquidity. All of that is put into Uniswap. If the peg ever gets too far below the peg for too long, Fei can take out everything they own from the pool, balance what's left in the pool, put their liquidity back in and burn any excess Fei.
3. **Direct incentives** - The idea was to reward behavior that helps the peg and punish behavior that hurts the peg. If Fei is below peg, sellers of Fei will get penalized, while buyers get rewarded.

Fei never really held the $1 peg too well, and the penalty for even slight deviations from peg were quite massive (e.g., ~25% when Fei was $0.95). This led to people trying to front-run each other on the way out. Fei collapsed below $0.70 at the worst.

Ultimately, they got rid of the peg reweights and the direct incentives. In its place, they installed a [Frax](/frax/)-like mechanism where anyone could always sell their Fei back to the protocol in exchange for $1 of underlying collateral. Since then, the peg has held pretty close to $1.