---
title: Uniswap v3
date: "2021-12-09T22:12:04.284Z"
description: ""
category: "Dexes"
---

Uniswap v3 introduces two changes to Uniswap v2:

1. In Uniswap v2, LPs provide liquidity regardless of the price. In v3, LPs specify the price range at which they want their liquidity to be "active". This is called **concentrated liquidity**. When price falls outside the range, positions stop earning fees and are converted to 100% of one token. LPs receive NFTs that represent their specific position vs. LPTs.
2. Uniswap v2 charged 0.3% for all swaps on all pools. Uniswap v3 creates multiple pools for each pair, with each pool having a different fee.

The changes mostly affect LPs and are tough to wrangle for most people. In summary, if you provide concentrated liquidity, you can earn more in fees (if the price is in the range you specify) but you can also lose more in impermanent loss (if the price is outside the range). In fact, [half of v3 LPs are losing money](https://cointelegraph.com/news/half-of-uniswap-v3-liquidity-providers-are-losing-money-new-research).

Beyond returns, v3 LPs need to actively manage their liquidity positions, which can be difficult. All put together, v3 exposes more functionality to create a "higher ceiling", but the average person should probably stick to simpler options.