---
title: Aave
date: "2021-12-09T22:12:05.284Z"
description: ""
category: "Lending"
---

Much of Aave's lending and borrowing is the same as [Compound](/compound/), with some changes:

Collateral is converted to an Aave token (**aToken**) like aETH. Instead of increasing in price, aTokens are 1:1 to their collateral, but you collect interest by getting more aTokens as you hold them. You can also configure aTokens to send the interest to other addresses.

Borrowers can choose between a variable interest rate and a stable interest rate. Borrowers can repay their loans using a different collateral (Aave will swap under the hood). Borrowers need to be both under the collateral factor and the **liquidation threshold** to be liquidated. Both this threshold and the liquidation discount can be set by governance.

Interest from borrowers is distributed to suppliers, reserves, fund the Aave DAO and compensate contributors. Reserves are further used to reward stakers of AAVE as well as people who use Aave.

Aave enables **flash loans**, which are taken out and paid back *in a single transaction*. Flash loans do not require collateral and are largely driven by code. Loaners earn .09% fees from flash loans. Flash loans are commonly used in attacks that exploit vulnerabilities in DeFi protocols, draining millions at a time. (We might explore these later - useful to think about stacking money Legos for evil as well as good).

If you hold AAVE, you can stake AAVE (and/or an LPT for a AAVE/ETH pool) into Aave's Safety Module. If AAVE holders decide the protocol is at risk, they can trigger a Shortfall Event, where 30% of the AAVE/LPTs in Safety Module are liquidated to cover any deficits. If that's still not enough, the protocol mints more AAVE and sells it.

Staking AAVE earns you fees from lending and rewards for securing the protocol in the above scenarios. 