---
title: Frax
date: "2021-12-09T22:12:06.284Z"
description: ""
category: "Stablecoins"
---

Frax is a stablecoin that varies how much collateral is needed to mint new stablecoin.

At the core, Frax wants the market to decide what % collateral ratio Frax should have. At the start, the collateral ratio is 100%, meaning you need to deposit 1 USDC to get 1 FRAX.

Whenever demand for FRAX causes FRAX to go above $1, the protocol lowers the collateral ratio. When minting new FRAX, you may then need 0.9975 USDC and .0025 worth of FXS, the Frax utility token that helps stabilize the coin. If FRAX goes below $1, then the protocol moves the collateral back up and requires more USDC.

To ensure stability, the protocol always allows people to sell FRAX back to the protocol at $1 value, though the ratio of USDC to FXS that they receive back depends on the collateral ratio - they'd get back whatever it would take to mint 1 FRAX at that collateral ratio. The protocol ensuring demand for FRAX at $1 enables the market to arbitrage any price deviations. 

Frax v2 is the generalized platform of the above strategy. One of the novel insights that the Frax team had was that there were many different ways to adjust collateral ratio - why not define an interface for such strategies and run many of them? This could lead to many novel mechanisms developed, all benefiting the stability of FRAX.

The strategy must have: a way to reduce the ratio, something that happens when the ratio should stay the same, a way to increase the ratio and a way to burn FXS to get rid of excess collateral. 