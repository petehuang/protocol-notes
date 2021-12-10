---
title: Compound
date: "2021-12-09T22:12:04.284Z"
description: ""
category: "Lending"
---

Compound allows you to lend and borrow certain tokens. To borrow a token, you deposit collateral in one token and borrow up to a certain % (**collateral factor**) of your collateral in another token.

Borrowers pay interest on their loan. Interest is at least 2.50% and increases if there's low liquidity or if there's more borrowing of the token. COMP holders can adjust the specific interest rate curve for each token.

Interest is divided to pay suppliers and to build a **reserve**. Reserves are controlled by COMP holders, but could be used as insurance - e.g., use reserves to compensate loaners if many borrowers suddenly default.

When you deposit collateral, it's converted to a Compound token (**cToken**). ETH becomes cETH, DAI becomes cDAI, etc. cTokens accumulate your interest rate by increasing in price. You get your interest when you withdraw collateral, which exchanges cTokens (which are now more valuable) for regular tokens.

If you don't maintain the collateral factor, people who have more of the token you borrowed can pay back up to 50% of what you borrowed. In return, they get to buy your collateral at an 8% **liquidation discount**, which is their incentive to hunt for liquidations in the first place. They can repeat this until you hold the collateral factor again.

Of 10M total COMP tokens, Compound designates ~5M to the community. Most of those tokens are distributed to people who supply and borrow on Compound - roughly 2.3K tokens are distributed each day, half to suppliers and half to borrowers.