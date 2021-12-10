---
title: Anchor
date: "2021-12-09T22:12:06.284Z"
description: ""
category: "Liquid Staking"
---

Anchor is a liquid staking and lending protocol.

Like Lido, Anchor wraps the staking token - in this case, LUNA is exchanged for bLUNA. On top of freeing up the staked token, Anchor allows users to then borrow stablecoins against the wrapped staking token. On the other side, depositors put in stablecoins and get back aTerra, which represents their claim to the stablecoins. All wrapped assets have their value accrual (staking fees) and destruction (loss of tokens in staking) represented via their price.

The structure of the lending market looks very similar to [Compound](/compound/) or [Aave](/aave/).

The one difference Anchor introduces is the **Anchor rate**. This is a goal interest rate that they seek to provide to depositors. Anchor builds a reserve if the real interest rate is over the goal and distributes the reserve if the real interest rate is below. It also uses its native token ANC to push borrowing up or down, which drives the interest rate borrowers pay.

Anchor captures some fees from the underlying staking rewards, the excess yield above the Anchor rate and fees from liquidations. Anchor largely uses these fees to buy back ANC, driving up the price.

Anchor uses ANC to incentive borrowing and providing liquidity for ANC. The former receives 40% of all ANC tokens and the latter receives 5%.