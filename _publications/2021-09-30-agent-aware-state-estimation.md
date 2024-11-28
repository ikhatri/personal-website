---
title: "Agent-aware State Estimation in Autonomous Vehicles"
collection: publications
permalink: /publication/aase
excerpt: 'A framework for calculating indirect estimations of state given observations of the behavior of other agents in the environment. We model traffic light estimation as such a problem and apply our framework to recover light state with over 70% accuracy using only the motion of other vehicles in the scene.'
date: 2021-09-30
venue: 'International Confderence on Intelligent Robots and Systems (IROS)'
paperurl: 'https://ishan.khatri.io/files/PKSZiros21.pdf'
---
**Abstract:** Autonomous systems often operate in environments where the behavior of multiple agents is coordinated by a shared global state. Reliable estimation of the global state is thus critical for successfully operating in a multi-agent setting. We introduce agent-aware state estimation -- a framework for calculating indirect estimations of state given observations of the behavior of other agents in the environment. We also introduce transition-independent agent-aware state estimation -- a tractable class of agent-aware state estimation -- and show that it allows the speed of inference to scale linearly with the number of agents in the environment. As an example, we model traffic light classification in instances of complete loss of direct observation. By taking into account observations of vehicular behavior from multiple directions of traffic, our approach exhibits accuracy higher than that of existing traffic light-only HMM methods on a real-world autonomous vehicle data set under a variety of simulated occlusion scenarios.

**Links:**
* [IROS Proceedings](https://ieeexplore.ieee.org/document/9636210)
* [Arxiv](https://arxiv.org/abs/2108.00366)
* [An older workshop version from ICRA 2020](https://ishan.khatri.io/files/PKSZseudw20_CR.pdf)

**Bibtex:**
```
@INPROCEEDINGS{9636210,
    author={Parr, Shane and Khatri, Ishan and Svegliato, Justin and Zilberstein, Shlomo},
    booktitle={2021 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
    title={Agent-Aware State Estimation in Autonomous Vehicles},
    year={2021},
    volume={},
    number={},
    pages={6694-6699},
    doi={10.1109/IROS51168.2021.9636210}
}
```
