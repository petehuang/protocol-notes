---
title: Curve
date: "2021-12-09T22:12:06.284Z"
description: ""
category: "Dexes"
---

**Liquidity** is a non-negotiable factor for stablecoins. Without it, you risk failure of the stablecoin (e.g., losing peg) and poor adoption. **Slippage** is how much price changes beneath you when you execute a swap between two tokens. You generally want as low slippage as possible, but that's especially true for stablecoins, since we know they should all equal $1.

You want high liquidity, low slippage.

Curve is a dex that is designed to achieve both. It's best understood in two parts - one for stablecoins and one for general-purpose swaps.

In the stablecoin part, Curve replaces Uniswap's `X*Y=K` with a [more complicated formula](https://curve.fi/files/stableswap-paper.pdf) that nearly eliminates slippage when the assets are the same price. Even swaps of hundreds of millions will have incredibly low slippage. Any combination of tokens should be the same price would work great with this formula - certainly stablecoins, but also, say, various wrappers of Bitcoin, which should all be the same.

Deposit 1+ of the tokens into a pool. You will still get an LPT that withdraws an equally proportion of the pool tokens. Swaps will balance the pool - imbalanced assets make price deviate from $1, so people will swap to capture that profit. Curve also gives bonuses to people who make deposits/withdrawals that balance the pool.

As a depositor, you earn on trading fees, the bonuses for balancing pools and bonuses of the CRV token. Since price largely doesn't move, you don't suffer impermanent loss.

There will be 3.03B total CRV tokens. 62% of them are emitted via the CRV bonuses. If you hold CRV, you can deposit them and get back veCRV (vote-escrowed CRV). The longer you stake for, the more veCRV you get, but you cannot trade veCRV. veCRV holders get to vote on **gauges** to decide how much of the CRV bonuses should go to which pool. The more votes, the more bonuses.

Remember that stablecoins need liquidity, so the governors of the projects want those CRV bonuses so that more people provide liquidity of their stablecoin. The fight for the CRV bonuses is called the **Curve Wars** -  more on this in other pages.

If you hold veCRV, you also get to boost your own earnings on your deposits. Curve also gives you trading fees in the form of the DAI+USDC+USDT LPT (nicknamed 3CRV).

The general-purpose part is called Curve v2. It implements [yet another complicated formula](https://curve.fi/files/crypto-pools-paper.pdf) that moves with the prices in the pool. While the stablecoin formula puts the "low slippage" part when prices are equal, the general-purpose formula moves this "low slippage" area to *wherever the price is*.

This makes low slippage possible for any asset combination. This, combined with the Curve Wars to incentivize LPs to move to Curve, represents a major competitive threat to Uniswap.