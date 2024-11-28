---
title: "I Can't Believe It's Not Scene Flow!"
collection: publications
permalink: /publication/trackflow
excerpt: 'Current scene flow methods broadly fail to describe motion on small objects, and current scene flow evaluation protocols hide this failure by averaging over many points, with most drawn larger objects. To fix this evaluation failure we propose a new evaluation protocol: Bucket Normalized EPE, and a frustratingly simple supervised scene flow baseline to achieve SOTA: TrackFlow.'
date: 2024-03-07
venue: 'European Conference on Computer Vision (ECCV)'
paperurl: 'https://arxiv.org/pdf/2403.04739.pdf'
---
**Abstract:** Current scene flow methods broadly fail to describe motion on small objects, and current scene flow evaluation protocols hide this failure by averaging over many points, with most drawn larger objects. To fix this evaluation failure, we propose a new evaluation protocol, Bucket Normalized EPE, which is class-aware and speed-normalized, enabling contextualized error comparisons between object types that move at vastly different speeds. To highlight current method failures, we propose a frustratingly simple supervised scene flow baseline, TrackFlow, built by bolting a high-quality pretrained detector (trained using many class rebalancing techniques) onto a simple tracker, that produces state-of-the-art performance on current standard evaluations and large improvements over prior art on our new evaluation. Our results make it clear that all scene flow evaluations must be class and speed aware, and supervised scene flow methods must address point class imbalances. We release the evaluation code publicly.

**Links:**
* [Arxiv](https://arxiv.org/abs/2403.04739)
* [Code on GitHub](https://github.com/kylevedder/BucketedSceneFlowEval/)

**Bibtex:**
```
@inproceedings{khatri2024trackflow,
    author = {Khatri, Ishan and Vedder, Kyle and Peri, Neehar and Ramanan, Deva and Hays, James},
    title = {I Can't Believe It's Not Scene Flow!},
    journal = {European Conference on Computer Vision (ECCV)},
    year = {2024},
    pdf = {https://arxiv.org/abs/2403.04739},
    website = {http://ishan.khatri.io/publication/trackflow}
}
```