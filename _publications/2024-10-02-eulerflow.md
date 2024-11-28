---
title: "Neural Eulerian Scene Flow Fields"
collection: publications
permalink: /publication/eulerflow
excerpt: 'We reframe scene flow as the task of estimating a continuous space-time ODE that describes motion for an entire observation sequence, represented with a neural prior. Our method, EulerFlow, optimizes this neural prior estimate against several multi-observation reconstruction objectives, enabling high quality scene flow estimation via pure self-supervision on real-world data.'
date: 2024-10-02
venue: 'Submission'
paperurl: 'https://arxiv.org/pdf/2410.02031.pdf'
---
**Abstract:** We reframe scene flow as the task of estimating a continuous space-time ODE that describes motion for an entire observation sequence, represented with a neural prior. Our method, EulerFlow, optimizes this neural prior estimate against several multi-observation reconstruction objectives, enabling high quality scene flow estimation via pure self-supervision on real-world data. EulerFlow works out-of-the-box without tuning across multiple domains, including large-scale autonomous driving scenes and dynamic tabletop settings. Remarkably, EulerFlow produces high quality flow estimates on small, fast moving objects like birds and tennis balls, and exhibits emergent 3D point tracking behavior by solving its estimated ODE over long-time horizons. On the Argoverse 2 2024 Scene Flow Challenge, EulerFlow outperforms all prior art, surpassing the next-best unsupervised method by more than 2.5x, and even exceeding the next-best supervised method by over 10%.

**Links:**
* [Arxiv](https://arxiv.org/abs/2410.02031)
* [Code on GitHub](https://github.com/kylevedder/SceneFlowZoo/)

**Bibtex:**
```
@misc{vedder2024neuraleuleriansceneflow,
      title={Neural Eulerian Scene Flow Fields},
      author={Kyle Vedder and Neehar Peri and Ishan Khatri and Siyi Li and Eric Eaton and Mehmet Kocamaz and Yue Wang and Zhiding Yu and Deva Ramanan and Joachim Pehserl},
      year={2024},
      eprint={2410.02031},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2410.02031},
}
```