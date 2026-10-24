---

title: "CQRS"
date: "2022-02-12"
hero_image: "./main.jpg"
hero_image_alt: "Wooden desk with a laptop, a tablet, a cup of coffee, glasses, books and someone writing in a notebook."
description: "Command Query Responsibility Segregation is a software design pattern that separates the write and read models of the data, mainly to improve the performance of a system with high concurrency while keeping it scalable."
slug: "cqrs"
---

**Command Query Responsibility** Segregation is a software design pattern that separates the write and read models of the data, mainly to improve the performance of a system with high concurrency while keeping it scalable.

For example, let's say we have an online bookshop and we run our normal operations from a single database. Everything is working as usual, and suddenly we start selling George R.R. Martin's book, so it receives lots of read and write operations with comments and purchases.

What happens here is that this peak of users firing so many operations makes the database suffer and slows the whole site down.

In this case the solution would be CQRS. By separating read and write operations we would keep our service working during concurrency peaks.

## Command

A DTO that expresses the intention of changing our system, that is, it will produce a side effect.

## Query

A DTO that expresses the intention of retrieving information from our system without changing it.

## Handler

It manages the corresponding command or query, turning its primitives into value objects and calling the use case. There is only one handler for each command or query.

## Bus

The bus takes the DTO to its handler, and the handler turns the primitives into value objects and runs the use case.

The benefit of this extra complexity is that the domain behaviour is decoupled from the controller: they are completely isolated and communicate through the bus.

## Problems

As we have seen, this pattern adds a lot of complexity to the system, so it is only advisable in products where we expect high concurrency.

In most cases we will have to split the databases, which can make the read data inconsistent, so those databases need to be kept in sync.

## To finish

Understanding all the implications of CQRS is hard and takes time to study and practise.

Here is a link to a very simple CQRS implementation.

[CQRS implementation in TS](https://github.com/ManuPerezDev/cqrs)
