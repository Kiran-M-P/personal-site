---
title: "How PayPal Solved Their Thundering Herd Problem with Jitter"
date: 2026-01-15
tags: [backend, system-design, kafka]
excerpt: "Braintree's disputes processor faced a thundering herd. Exponential backoff wasn't enough—adding jitter to retry timing spread the load and resolved it."
---

Braintree (PayPal's payment gateway) faced a thundering herd problem on their disputes processor. High volumes of parallel requests caused calls to fail repeatedly, even after retries, eventually landing in dead letter queues (DLQs).

## The Problem

They already had exponential backoff configured, but this didn't solve the problem. All the failed requests retried at roughly the same time, recreating the same overload.

## The Solution: Jitter

The fix was adding jitter—randomness to retry timing. By combining exponential backoff with jitter, retries spread out over time instead of hitting the server simultaneously. This change drastically reduced load and resolved the thundering herd issue.

## Key Takeaway

When dealing with retries at scale, exponential backoff alone isn't enough. Consider introducing jitter to retry timing.

[Read the original blog post](https://lnkd.in/gfJ4aYU6)
