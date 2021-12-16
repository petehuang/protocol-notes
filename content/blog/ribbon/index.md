---
title: Ribbon
date: "2021-12-09T22:12:05.284Z"
description: ""
category: "Options"
---

Ribbon is a yield-generating protocol utilizing options.

Ribbon curates a set of options-selling strategies (e.g., writing out of the money put options) and repeatedly runs them week over week, collecting the premium. Ribbon uses a volatility-sensitive parameter to determine what strike price to write at. You can choose which strategy you want exposure to and deposit the collateral required.

From there, Ribbon automatically converts the collateral into oTokens through [Opyn](/opyn/). It then sells the oTokens to a market maker, who then runs an auction for all of the oTokens at once via [Gnosis](https://gnosis.io/protocol/).

The collected premium is then deposited into yearn to earn additional yield.