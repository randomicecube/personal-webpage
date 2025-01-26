---
title: "Knowledge Graph construction with Language Models"
description: "Collaborating alongside a group of colleagues with SEB, a leading Nordic bank, on a joint project for my Project Course in Data Science at KTH."
dateString: Sep 2024 - Dec 2024
draft: false
showToc: false
weight: 202
# cover:
#     image: addme
---

## Description

Our group, in collaboration with KTH and SEB, aimed to address challenges such as
triplet extraction reliability from unstructured data for Knowledge Graphs (KGs)
by employing pre-trained large language models (LLMs).
In particular, we explored two distinct yet complementary methodologies to improve Knowledge Graph
construction in the financial domain: question-answer (Q&A) generation, as well as a consensus
strategy for triplet extraction, both being subject to automated evaluation to test their performance.

The Q&A generation experiment demonstrated the efficacy of Vector RAG over Graph RAG, with
significant improvements in retrieval accuracy, particularly when paired with advanced embedding
strategies. This approach leveraged language models for both question generation and validation,
showcasing the robustness of retrieval-augmented generation in extracting actionable insights from
KGs.

![alt text](consensus-pipeline.png)

In contrast, the consensus strategy (evaluated as displayed above) introduced a unique pipeline that integrated outputs from multiple
language models using veto and majority policies, combined with various matching techniques (exact, fuzzy,
and embeddings with cosine similarity).
Notably, the veto policy with embedding-based comparison emerged as the most effective configura-
tion, achieving a balanced trade-off between diversity and precision in triplet extraction. While the
consensus approach did not universally enhance accuracy, it provided valuable insights into refining
model outputs for complex data scenarios.

Together, these findings highlight the complementary nature of Q&A-driven evaluation and consensus-based
refinement. Vector RAG excelled in question-answering tasks, while embedding-based veto
policies provided nuanced improvements in triplet extraction. This dual approach underscores the
potential of combining advanced retrieval and consensus strategies to address the challenges of
financial KG construction.

Overall, we believe that the project successfully showcased the potential of integrating LLMs for
financial KG construction.

## Contributions

My primary contributions to the project included the integration of language models into
the backend, as well as researching for suitable ones.
Furthermore, I was also responsible for the research of suitable evaluation metrics,
and helping in conceptualizing and implementing the consensus strategy for triplet extraction.
Finally, I was also assigned the task of team manager, which involved everything from
more bureaucratic tasks, such as contacting SEB and KTH whenever necessary, to keeping
a diary of the team's progress (individually and collectively) along the weeks, and
ensuring that everyone was on track with their tasks.
