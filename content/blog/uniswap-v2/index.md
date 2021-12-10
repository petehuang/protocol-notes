---
title: Uniswap v2
date: "2021-12-09T22:12:03.284Z"
description: ""
category: "Dexes"
---

*Note: Uniswap is now on [v3](/uniswap-v3/). We start with v2 as an introduction to common concepts and since many projects are forks of Uniswap v2.*

Uniswap is a **decentralized exchange (dex)**, where users can exchange between crypto tokens according to a formula instead of an order book of bids and asks.

Uniswap-like dexes rely on **liquidity providers (LPs)**, who provide tokens X and Y into a *pool* to enable users to swap between X and Y. Uniswap relies on a formula `[number of tokens X]*[number of tokens Y]=[some constant K]`. The constant K is different for each pair and is set by the first person to deposit liquidity into the pool.

The price for X in terms of Y is `[number of tokens Y] / [number of tokens X]`. If you buy X using Y, Y goes up and X goes down - the price of X has gone up relative to Y. LPs have to deposit tokens at the current ratio.

When an LP deposits X and Y, the AMM will calculate what % of the pool was contributed and give them a matching amount of **liquidity provider tokens (LPTs)**, which represent a claim to a portion of the liquidity pool. The LP withdraws by sending back LPTs and the AMM returns the matching % of the pool, dividing it between X and Y in accordance with current prices.

Note that the ratio of X to Y changes as people buy and sell. If price of X has increased, then the LP will get less X and more Y when they withdraw. If you compare the dollar value of your holdings after LPing vs. simply holding the same tokens, the LP amount will be less. This is called **impermanent loss** and happens whenever the relative price changes, no matter up or down.

What do LPs get in exchange for providing liquidity? Uniswap v2 gives them a cut of the fees generated from swaps in the pair. Forks of Uniswap often give additional incentives (e.g., the dex's own token) for providing liquidity via **farms**. LPs deposit (stake) their LPTs to receive rewards. Potential LPers should factor in fees, impermanent loss and farm rewards and compare it to simply holding.