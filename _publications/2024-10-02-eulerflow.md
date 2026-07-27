---
title: "Neural Eulerian Scene Flow Fields"
collection: publications
permalink: /publication/eulerflow
excerpt: 'We reframe scene flow as the task of estimating a continuous space-time ODE that describes motion for an entire observation sequence, represented with a neural prior. Our method, EulerFlow, optimizes this neural prior estimate against several multi-observation reconstruction objectives, enabling high quality scene flow estimation via pure self-supervision on real-world data.'
date: 2025-01-01
venue: 'International Conference on Learning Representations (ICLR)'
paperurl: 'https://arxiv.org/pdf/2410.02031'
---
**Abstract:** We reframe scene flow as the task of estimating a continuous space-time ODE that describes motion for an entire observation sequence, represented with a neural prior. Our method, EulerFlow, optimizes this neural prior estimate against several multi-observation reconstruction objectives, enabling high quality scene flow estimation via pure self-supervision on real-world data. EulerFlow works out-of-the-box without tuning across multiple domains, including large-scale autonomous driving scenes and dynamic tabletop settings. Remarkably, EulerFlow produces high quality flow estimates on small, fast moving objects like birds and tennis balls, and exhibits emergent 3D point tracking behavior by solving its estimated ODE over long-time horizons. On the Argoverse 2 2024 Scene Flow Challenge, EulerFlow outperforms all prior art, surpassing the next-best unsupervised method by more than 2.5x, and even exceeding the next-best supervised method by over 10%.

**Links:**
* [Arxiv](https://arxiv.org/abs/2410.02031)
* [Project Page](https://vedder.io/eulerflow)
* [Code on GitHub](https://github.com/kylevedder/SceneFlowZoo/)

**Bibtex:**
```
@inproceedings{ICLR2025_f6f4e428,
      author = {Vedder, Kyle and Peri, Neehar and Khatri, Ishan and Li, Siyi and EATON, ERIC and Kocamaz, Mehmet and Wang, Yue and Yu, Zhiding and Ramanan, Deva  and Pehserl, Joachim},
      booktitle = {International Conference on Learning Representations},
      editor = {Y. Yue and A. Garg and N. Peng and F. Sha and R. Yu},
      pages = {99546--99564},
      title = {Neural Eulerian Scene Flow Fields},
      url = {https://proceedings.iclr.cc/paper_files/paper/2025/file/f6f4e4285fcbe97293d7fdbcffe7efe2-Paper-Conference.pdf},
      volume = {2025},
      year = {2025}
}
```