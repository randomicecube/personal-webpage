---
title: "Galápagos: Automated N-Version Programming with LLMs"
description: "Galápagos is a tool that automates the generation of N-Version program variants using LLMs and validates their equivalence, demonstrating effectiveness in creating diverse and reliable variants, even across different programming languages."
dateString: Nov 2023 - Aug 2024
draft: false
showToc: false
weight: 201
# cover:
#     image: addme
---

## Description

Galápagos has been developed as part of the work toward a [research paper](https://arxiv.org/pdf/2408.09536)
submitted to the IEEE Transactions on Dependable and Secure Computing (TDSC) journal.
The paper was authored by the ASSERT team at KTH Royal Institute of Technology, Sweden,
and is currently under review.
In particular, the authors are [Javier Ron](https://github.com/javierron),
[Javier Cabrera-Arteaga](Jacarte),
[Martin Monperrus](https://github.com/monperrus),
and [Benoit Baudry](https://github.com/bbaudry).

The work explores the integration of N-version programming with automatic programming language translation, utilizing large language models (LLMs). It also makes use of a formal equivalence checker to validate the correctness of the generated program variants.
The system only accepts pure functions as input.
It is available as an open-source project on [GitHub](https://github.com/ASSERT-KTH/Galapagos/).

For our evaluation, we used open-source C-based projects from GitHub, such as
FFmpeg and openssl, programs and tools which are ubiquitous in the software industry.

## Contributions

As for my contributions within the project, my work was focused on refactoring the tool,
based on an initial version which was under development when I joined the project.
I was able to refactor core sections of the codebase, including testing and use case
handling, into a more modular, reusable, and maintainable structure.
I also helped in documenting the tool, as well as choosing the projects and functions
for evaluation.
