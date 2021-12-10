---
title: yearn
date: "2021-12-09T22:12:05.284Z"
description: ""
category: "Yield Optimizer"
---

yearn is a yield optimizer, meaning it will find the best way for you to deploy your capital in various yield **strategies**, which are perhaps the most direct example of what people mean when they say DeFi is all about money Legos.

As a user, you pay yearn a 2%/20% management fee like in some traditional funds. 2% of your holdings every year and 20% of the earnings go to yearn. Of the 20%, 10% goes to yearn itself and up to 10% goes to the person who comes up with the strategy. The funds accruing to yearn are controlled by governance.

Deposit a token and receive a yearn-wrapped version (e.g., deposit USDT and receive yUSDT), whose price increases as your collateral earns yield. Your tokens get pooled into a **yearn vault**, which is actively managed by smart contracts to maximize yield.

Each vault employs various strategies. Some strategies can be relatively simple, like optimizing usage of Curve. Other strategies can involve multiple layers in protocols that much fewer people have heard of. Each strategy is given an allowance to earn yield, which is then returned back after fees.

I recommend you read through some of the [strategies](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3) that people have come up with.

It's worth noting that yearn used to be considered a strong competitor in the Curve Wars by offering a yearn strategy that would intake CRV and output yveCRV. yveCRV holders would have their Curve earnings accumulated and compounded for them, which would increase total yield. yearn was much slower at accumulating CRV and recently [delegated](https://twitter.com/iearnfinance/status/1461042313803804679) their veCRV to Convex.