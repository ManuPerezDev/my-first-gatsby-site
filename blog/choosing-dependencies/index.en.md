---

title: "A guide to choosing dependencies"
date: "2024-02-08"
hero_image: "./connections.jpg"
hero_image_alt: "Tangled light trails over a rooftop at dusk."
description: "A short guide to simplify the process of choosing dependencies and to encourage reflection and debate within development teams, so that the pillars of our application are as solid as possible."
slug: "choose-dependencies"
---

## Introduction

This is a short guide to simplify the process of choosing dependencies. It aims to encourage reflection and debate within development teams so that the pillars of our application are as solid as possible.

It does not guarantee that we will never have to change our dependencies, so it is always a good idea to use techniques such as dependency injection and library wrappers to keep our business code as independent of those dependencies as possible and make changes as simple as possible.

## Risks

We have to keep in mind that using third-party dependencies can bring risks that put the trust of customers and investors at stake. For example, in businesses that work with data, security is a very important value and having vulnerabilities is not an option.

Some risks of using third-party dependencies:

### Vulnerabilities

Over time, dependencies that are not updated often fall victim to multiple exploits. This is an extra risk we must limit, so that trusting our code does not mean losing trust in the organisation.

### Learning cost

Adopting third-party solutions always comes with a learning curve. We should always try to reduce it and make things easy for the developers who will work on the code after we have left.

### Maintenance cost

This cost, although lower than writing and maintaining our own code, is also something to consider, because libraries and frameworks often conflict with each other, and that has to be solved.

### Risk of the creator abandoning it

This risk always exists, not only in software development but with any third-party tool. Notion, the tool I am writing with right now, could shut down tomorrow and throw all my work in the bin. So why do I keep working in Notion? Because I trust that it won't, or at least not any time soon, which would give me time to look for an alternative.

So, accepting this risk, we must find tools that deserve our trust and that we know will not go away in the coming years. (Although you never know!)

## Do we need a dependency?

Before rushing to choose a dependency, the first thing is to ask ourselves whether we really need one.

Is there a solution in the standard libraries that can solve the problem?

If there is, we don't need to look any further.

Can we build a solution ourselves?

If the answer is yes, we have to weigh whether it is worth it in terms of time, effort and code maintenance.

## Criteria for choosing a dependency

Below are some criteria I consider important when choosing a dependency. There may be many more, and we have to adapt them to our particular case. These are just some suggestions to get started.

### Impact of the dependency on the business

It never hurts to analyse the impact that adopting a dependency has on our business, and to think about what would happen if something went badly wrong.

This will guide us when deciding whether to build it ourselves or depend on a third party.

As a rule, we don't usually depend on third parties for what our business depends on. Third-party solutions are usually adopted for infrastructure details, whether the technology itself, like databases or HTTP communication, or operations that are not core to the business, like user authentication, front end frameworks or dependency injection frameworks, among many other examples.

For example, with an authentication library, if recurring vulnerabilities are found or its system is even compromised, we can always migrate to another authentication system. It would certainly be a bump in the road, but we could recover.

To minimise this risk, we can look at other criteria.

### Popularity

How popular a dependency is always tells us something, because wide adoption by the community means its reliability has been tested by a large number of developers.

To measure the popularity of a dependency we can look at its **number of downloads**, whether weekly, monthly or in total. It is also worth looking at the **usage trend** of the library. If it is going down, we can more or less conclude that there are better options out there.

On the other hand, the **number of stars and forks on GitHub** can give us valuable information about its popularity. However, we have to be careful that those stars don't come from platforms that sell GitHub stars. Although it is a rare practice, we have to read this metric in context with other metrics to confirm it is genuine.

### Maintenance

How well the solution we adopt is maintained is vital. We don't want to be working with a dependency and realise it hasn't been updated in 3 years.

To make sure the dependency is properly maintained, we will look at the **date of the last update** and the **frequency of updates**. It is also good to have a **changelog** describing the changes in each version, which will guide us on what to change if it breaks our build.

We can also look at the **issues** and **pull requests** on GitHub. A quick look at the number of issues and pull requests gives us a rough idea of the health of the library. However, for it to be a metric worth taking into account, we can look at the quality of those issues and PRs: check closed issues and whether the maintainers solve them or close them without a fix, and whether PRs get merged or rejected for no reason. Above all, judge whether the maintainer communicates well about possible problems with the dependency or functional improvements.

Another interesting piece of information is **who maintains the dependency**. A single person? A group of developers? The community? A company?

### Documentation

Good documentation and guides on how to use the dependency can tip the balance towards one or another. This is one of the most important points, because reducing the learning curve matters a lot.

### Community

An active community behind the product is always a good sign. Questions and discussions are always valuable for all users and for the creators of the tool.

Many of these packages' repositories have a [Discussions](https://github.com/chakra-ui/chakra-ui/discussions) section, which works as a forum where the community interacts. We can also look at the official websites, which sometimes have official forums.

## Conclusion

In short, to choose a dependency we have to consider:
- Popularity
  - Number of downloads
  - Usage trend
  - GitHub stars and forks
- Maintenance
  - Date of the last update
  - Frequency of updates
  - Quality of the changelog
  - Issues and pull requests
  - Who maintains the dependency
- Documentation
- Community

As mentioned earlier, these are some of the criteria that can guide our choice, but that doesn't mean they are the only ones or that they carry the same weight in every situation. So we will always have to adapt to our particular case: what problem we have and which criteria matter most when choosing our dependency.

Thanks to [Eric Driussi](https://www.linkedin.com/in/eric-driussi/) for making this post better.
