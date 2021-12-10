---
title: Balancer
date: "2021-12-09T22:12:07.284Z"
description: ""
category: "Dexes"
---

To understand Balancer, we once again start with the basis of Uniswap v2: two tokens with a pool formula of `X*Y=K` where the price of X is the number of Y tokens divided by the number of X tokens.

Balancer is a generalized form of this. You can have 2-8 tokens in a pool. Each token is given a **weight** in the pool. (Weight is a separate factor from the number of tokens in each pool. The sum of all weights = 1.)

The pool formula is `exp(number of X tokens, weight of X in pool)`,  multiplied across all tokens in the pool, equaling a constant. The price of a token X in terms of a token Y is `(number of Y / weight of Y) / (number of X / weight of X)`. You can see how this all relates to Uniswap: `X*Y=K` is a two-token, equal-weight version of the formula.

Balancer allows many more controls of the parameters of pools: change tokens in the pool, change weights, change fees, activating/deactivating swaps, etc. It also enables various visibility levels: public pools allow all liquidity but no parameter changes, private pools allow liquidity and parameter changes from the owner, smart pools allow all liquidity and parameter changes via smart contracts. This all extends Balancer from "just another dex" to a building block for other use cases.

Depositors earn from trading fees and incentives (in the form of the BAL token) that governance controls. Some trading fees also go to a central protocol fund that BAL holders control.