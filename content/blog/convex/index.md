---
title: Convex
date: "2021-12-09T22:12:06.284Z"
description: ""
category: "Curve Wars"
---

Remember that you can use veCRV boost your Curve returns and also govern where Curve emissions incentives go, but you need to lock CRV in order to do this.

Convex is specifically designed to separate these usages. People who only care about yield can take their Curve LPTs and get the boost without locking up CRV themselves.

If you have CRV, you can give it to Convex, which will give you a Convex-wrapped CRV called cvxCRV. Convex will aggregate all the CRV they collect and convert it to veCRV. Convex gets Curve trading fees, the right to vote for gauges with their amassed veCRV and the ability to boost its rewards in Curve pools.

Convex pays you to do a number of things:

- If you have deposited into Curve, depositing your LPT into Convex earns you boosted rewards from Curve as well as rewards from Convex in the form of their token CVX. Convex takes 16% of the boosted rewards for other purposes. 50% of all Convex tokens are set aside for the CVX incentive.
- If you stake cvxCRV, you get the Curve trading fees (3CRV), some of the boosted rewards from Curve and rewards from Convex. 10% out of the above 16% boosted rewards is sent here. The documentation does not make it clear where the Convex rewards for these stakers come from.
- If you stake CVX, you get some of the boosted rewards from Curve. 5% of the 16% boosted rewards is given to Convex in the form of CRV. Instead of giving that to you directly, it basically assumes you would have sent it back with Convex: it locks it as veCRV, then gives you cvxCRV.
- If you lock CVX into vlCVX, you get to vote on how Convex should distribute its Curve votes.
- If you are an LP in either the CVX/ETH pool or the cvxCRV/CRV pool, you can deposit those LPTs into Convex to earn CVX. 25% of all Convex tokens are set aside for this incentive.

There are two important things to remember about Convex. First, **Convex is paying you with CVX tokens to use Convex as an interface to Curve and to give them your CRV** - that is ultimately their incentive mechanism. We will see other projects in the Curve Wars use different mechanisms to obtain CRV.

Second, because Convex has used incentives to accumulate CRV, they are now dominant controllers of the underlying CRV vote. Thus, **CVX, vlCVX and their holders are themselves now valuable as a way to control Curve**. This is the objective of all participants in the Curve Wars. It may be more economical for projects to buy CVX or vlCVX instead of CRV to influence the CRV emission vote - this is because they can also earn CVX rewards while obtaining the vote.