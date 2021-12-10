---
title: Lido
date: "2021-12-09T22:12:05.284Z"
description: ""
category: "Liquid Staking"
---

The short summary of staking with validators in Proof-of-Stake blockchains is that **validators**, the machines that confirm reality in a blockchain, are limited by how much of the blockchain token they have. It's expensive for them to buy more, so if you stake your tokens with them, they'll share some of their fees with you.

If you stake your tokens, you can't really do anything else with them. It would be nice if you could stake and then also use that token for other purposes.

**Liquid staking** protocols like Lido allow you to do this. Deposit ETH into Lido and it will give you back a Lido-wrapped token called stETH. Its price tracks ETH price, and it theoretically can be used just like ETH, but only if other protocols accept it. As you earn fees from the underlying staked ETH, you'll get more stETH in your wallet as you hold it.

Lido takes 10% of all fees earned. 5% of those fees gets returned back to the validators. The other 5% goes to a Lido treasury that holders of the native token LDO control.

Funnily enough, some protocols don't work well with the stETH balance changing with interest (Aave [aTokens](/aave/) are similar). They need balance to stay the same while price increases with interest, like how Compound [cTokens](/compound/) work. Lido offers *another* wrapped token called wstETH, which uses this second model of distributing fees.