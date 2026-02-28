---
title: "Database Design Patterns for Microservices"
date: 2025-02-20
tags: [microservices, mysql, architecture]
excerpt: "When to share databases and when to isolate—patterns for data ownership in distributed systems."
---

In microservices, how you handle data can make or break your architecture. Here are some patterns worth knowing.

## Database per Service

Each service owns its database. No other service touches it directly. This gives you:

- **Independent scaling**: Scale reads/writes per service
- **Technology freedom**: Use MySQL for one service, PostgreSQL for another
- **Failure isolation**: A DB issue in one service doesn't cascade

## When to Share

Sometimes a shared database is pragmatic:

- **Legacy migration**: Extracting services gradually from a monolith
- **Reporting/analytics**: Read replicas for cross-service queries
- **Transactional boundaries**: When ACID across services is non-negotiable (rare)

## Trade-offs

| Pattern | Pros | Cons |
|---------|-----|-----|
| DB per service | Clear ownership, independent deploy | Distributed transactions, eventual consistency |
| Shared DB | Simpler queries, strong consistency | Tight coupling, scaling limits |

## Recommendation

Default to database per service. Share only when you have a strong reason and a clear migration path to split later.
