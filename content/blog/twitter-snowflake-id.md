---
title: "How Twitter Generates Unique IDs at Scale — Snowflake ID"
date: 2025-07-15
tags: [backend, system-design]
excerpt: "A 64-bit unique ID generated without coordination. Time-ordered, highly performant, and perfect for scalable systems."
---

While diving deeper into system design, I came across Twitter's Snowflake ID generation strategy — and it's absolutely fascinating!

## What is a Snowflake ID?

A 64-bit unique ID generated without needing any coordination (like a distributed cache or database).

- Time-ordered and roughly sortable
- Highly performant for write-heavy systems
- No central bottlenecks

## Snowflake ID Structure

- 1 bit – Sign bit (always 0)
- 41 bits – Timestamp in milliseconds (~69 years of uniqueness)
- 10 bits – Machine/Data center ID (up to 1,024 nodes)
- 12 bits – Sequence number (ensures uniqueness within the same millisecond)

<!-- DIAGRAM -->

## What problem does it solve?

- Enables decentralized unique ID generation
- Avoids bottlenecks from shared databases or caches
- Ensures chronological ordering — perfect for feeds, logs, and timelines

## Compared to other ID strategies

- Auto-increment IDs – not scalable in distributed systems
- UUIDs – globally unique but too long and not chronologically ordered

## Want to learn more?

- [Twitter's blog: Announcing Snowflake](https://lnkd.in/gq3E3vjr)
- [YouTube – Unique ID generation in system design](https://lnkd.in/ga8gJ52i)
