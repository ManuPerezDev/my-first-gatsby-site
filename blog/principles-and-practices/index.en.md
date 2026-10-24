---

title: "3 years of Principles and Practices"
date: "2024-01-05"
hero_image: "./main.jpg"
hero_image_alt: "Backlit keyboard in front of two monitors showing code."
description: "After a few years of experience in software development, I would like to share a set of principles and practices that matter to me in my day to day, some more essential than others."
slug: "principles-and-practices"
---

After a few years of experience in software development, I would like to share a set of principles and practices that matter to me in my day to day, some more essential than others.

## Broken windows theory

[The broken windows theory](https://en.wikipedia.org/wiki/Broken_windows_theory) is a criminological theory introduced by James Q. Wilson and George L. Kelling. It states that a place with obvious signs of neglect, vandalism and disorder invites more of the same.

For example, a broken window in a building is a sign of abandonment that encourages other people to take advantage of it. Another example is the abandoned car you find in many places in our cities. One day an apparently normal car appears, but over the days the first symptoms start to show: flat tyres, broken windows. And over the weeks and months it gets stripped down to the chassis.

This happens to a greater or lesser extent in many areas of life. Software too. The feeling that nothing works as it should, and a decay that demoralises even the most optimistic person.

In their book _The Pragmatic Programmer_, David Thomas and Andrew Hunt also point out that the worst part of this state is the [hopelessness it creates, which spreads](https://psycnet.apa.org/record/1995-01924-001) through the development team. It is inevitable to fall into a self-destructive spiral when nobody cares about what they do, where things are accepted as they are and there is neither time nor intention to do the right thing.

But just as hopelessness is contagious, so is hope. Doing the right thing, taking charge of the changes that are needed and building something we are proud of. Building something so good that we get the opposite effect: code and an environment looked after with so much care that everyone is afraid to leave a broken window.

## Principle of least astonishment

[The principle of least astonishment](https://en.wikipedia.org/wiki/Principle_of_least_astonishment) says that an artefact should behave the way most people would expect it to. For example, a command should have side effects and a query should not. It would be very surprising if calling a method named GetUser(id) deleted or updated a table. It would be just as surprising if a method named DeleteUser(id) returned a response.

So this principle is a guide to reduce the unexpected behaviour of a system, and with it the accidental complexity that comes from those decisions.

## Single responsibility principle

[The single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) is a software engineering principle that states that a software artefact should have one reason to change, as Robert C. Martin puts it. For example, if a report has two reasons to change, one being its content and the other the format it is presented in, each change should happen in its own module. In other words, having to touch the same module for both changes would violate the principle.

This principle doesn't mean that a change to the presentation should only touch one class or file. Depending on the scope of the change, we will touch one or many files that belong, and this is the important part, to the module of the change. For example, if we have to modify the Users module, it is a bad sign if we also have to change modules outside it.

## Dependency inversion principle

[The dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle) states that high-level modules should not depend on low-level modules and that abstractions should not depend on details.

We apply this every day to manage persistence, communication, error tracking and logging modules. It lets us isolate technologies from our domain and makes it easier to test our use cases.

## Immutability

As for many people, my appreciation of immutability came after many headaches. An object is created at the start of a process and keeps changing all over the program. You follow the changes, but at some point you feel stupid for not understanding what is going on.

Don't worry: software with too much mutation is very hard to understand and maintain. To reduce and limit the effects of mutation, I have found [higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function) useful, such as map, reduce and filter, among others. Instead of mutating an array, these functions always return a new one, which makes the code much easier to follow.

Then there are objects that mutate their state. There are a few options to limit their impact. Keeping properties private, changing state only inside the object itself or creating a new object with the change can all be tactics for more readable code with fewer surprises.

Finally, in languages that allow it, it is always a good idea to use immutable variables, like **const** instead of **let** in JavaScript and other languages.

## The Boy Scout Rule

This is a rule used by boy scouts which says that before leaving a campsite they always have to leave it cleaner than they found it.

Applied to programming, it means that whenever we work on code we try to leave it tidier, more readable and with fewer surprises. It can be small things like renaming a variable, extracting a method or fixing the spacing of the code, for example.

The point is never to miss the chance to spot and apply improvements to the code. In the long run this leaves better quality code and the satisfaction of paying close attention to detail.

## Pair programming

Redundancy, feedback and avoiding knowledge silos are some of the advantages of [pair programming](https://en.wikipedia.org/wiki/Pair_programming). These advantages, together with a lower chance of disaster, make pair programming essential for me. It requires a strong investment, no doubt, but it is gaining more and more ground in corporate environments because of its great advantages.

In fact, not every team can pair all the time, and the number of errors and bugs always goes up with individual tasks. We have often had to go back to tasks that were done individually, which shows how useful this practice is.

## TDD

What can I say about [TDD](https://en.wikipedia.org/wiki/Test-driven_development) that hasn't been said already? A practice that has helped us work with constant and safe deliveries. Whether applied strictly or more loosely, simply writing tests first, it has helped us in our day to day to move at a steady pace while trying to understand the problem and apply the simplest possible solution.

## DDD

Among the advantages of applying DDD, I would highlight the use of a **ubiquitous language** between development and product. Speaking a common language across teams makes the day to day much easier and drastically reduces misunderstandings. Like everything, it is not a magic solution, but it helps smooth things over.

I would also highlight the common language within the development team, with terms such as value object, entity and application service, among others. This better communication through a shared language helps us focus on solving the problem, with the added advantage that it is a language widely accepted in the industry.

The most common problems we have faced are communication between modules, aggregates and module boundaries. To avoid importing repositories across modules we use a query bus, which helps us stay decoupled. However, this adds complexity, because every query needs its own response and handler, which increases the amount of code.

With aggregates we often have doubts such as: is this an entity, or could it already be considered an aggregate? Something is considered an aggregate when it brings together information from other entities, but it is often hard to know where the boundary is. Over time these problems have become less frequent thanks to experience and team agreements.

## Trunk based development

This practice, like others, depends a lot on the characteristics of the team we are working with. In general, I have found quite a few advantages in working this way compared to the classic branch and merge approach.

For those who don't know it, [TBD](https://trunkbaseddevelopment.com/) means that a team works on a single branch and never creates branches to work on new features.

Its main advantages are avoiding branches that take a long time to integrate, which leads to small changes that don't break the build and add value. It also forces the code to be more decoupled, so it creates few or no conflicts.

Another advantage is that the team tries to keep the deployment pipeline from ever going red, since that blocks other teams from integrating their changes. This means the changes that get integrated have to be small and contained, and pushed only after running the test suite locally.

## Hexagonal architecture

This layered architecture, also known as ports and adapters, helps us decouple our domain from communication and persistence technology. However, its main advantage, together with dependency injection, is that it makes our domain use cases much easier to test.
