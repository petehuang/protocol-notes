---
title: Maker
date: "2021-12-09T22:12:04.284Z"
description: ""
category: "Stablecoins"
---

MakerDAO manages the Dai stablecoin: 1 DAI is pegged to $1 USD. Dai is intended to be backed mostly by other decentralized assets like ETH rather than fiat currency like USD for USDT/USDC.

Maker allows you to take out leveraged loans. Deposit an approved collaterals (e.g., Ether or a token like "UNIV2DAIUSDC" - an LPT for the Uniswap v2 DAI-USDC pool) and mint DAI. You can then use Dai to purchase other assets. Pay back the DAI plus an interest rate (**"Stability Fee"**), get back your collateral.

If your collateral drops in value below a certain threshold (**"Minimum Collateralization Ratio"**), you'll be liquidated. You keep your Dai, but Maker will use your collateral to buy back the same amount of Dai, returning to you whatever collateral is left over.

Holders of the token MKR govern the system by setting parameters like the Stability Fee.

How Maker maintains the peg:

- When Dai > $1 USD, users can take out more loans and sell the Dai for profit, thus increasing supply and decreasing price.
- When Dai < $1 USD, users can pay off their loans for less than they took out, thus decreasing supply and increasing price.
- If that isn't enough, MKR holders can increase the Stability Fee to make it more expensive to hold Dai, pushing borrowers to pay off their loans and decrease supply.
- If the value of collateral drops below a certain threshold, loans are liquidated (see above).
- If the liquidation isn't enough to cover the Dai outstanding, Maker issues more MKR and sells it, which dilutes MKR holders. MKR holders are incentivized to properly govern the system through this mechanism.
- If the system is in danger, MKR holders can vote to initiate Emergency Shutdown. Everything freezes, and anyone holding Dai is given collateral in exchange for their Dai using the 1 Dai = $1 USD rate - this forces Dai to be worth $1.