---
layout: cv
# title: "Curriculum Vitae: <em>Khondaker Tasrif Noor</em>"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Profile

A highly competent researcher with a strong focus on deep learning, specifically experienced in neural network architecture design, algorithm implementation, and advanced AI model and system testing. I have strong communication and project planning skills within collaborative team environments. My PhD research focuses on innovative neural network methodologies, and I am pursuing a career to leverage my research, technical, and design expertise within artificial intelligence systems to unlock new possibilities in the field.

## Education

<div style="display: flex; align-items: flex-start; margin-top: 20px; margin-bottom: 15px;">
  <img src="{{ base_path }}/images/deakin-logo.png" alt="Deakin University" style="width: 50px; height: 50px; margin-right: 15px; flex-shrink: 0;">
  <div style="flex-grow: 1;">
    <div><strong>Ph.D in Computer Vision</strong> <span style="float:right;">2025 (expected)</span></div>
    <div><em>Deakin University, Victoria, Australia</em></div>
  </div>
</div>
Pursuing a PhD in Information Technology with a research focus on developing deep learning models for image classification. Recipient of the prestigious Deakin University Postgraduate Research Scholarship (DUPR). Published multiple research papers in top-tier conferences and journals. Anticipated completion date: July 2025.

<div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
  <img src="{{ base_path }}/images/macquarie-logo.png" alt="Macquarie University" style="width: 50px; height: 50px; margin-right: 15px; flex-shrink: 0;">
  <div style="flex-grow: 1;">
    <div><strong>Master of Engineering in Electronics Engineering</strong> <span style="float:right;">November 2019</span></div>
    <div><em>Macquarie University, Sydney, Australia</em></div>
  </div>
</div>
Achieved Vice-Chancellor's International Scholarship and completed a Master of Engineering degree with a specialisation in Electronics Engineering. Gained in-depth knowledge in the areas of analogue and digital electronics. Adapted technical and practical skills for electronic systems and circuit design by completing electronic projects as a part of coursework.

<div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
  <img src="{{ base_path }}/images/BRACU-logo.png" alt="BRAC University" style="width: 50px; height: 50px; margin-right: 15px; flex-shrink: 0;">
  <div style="flex-grow: 1;">
    <div><strong>B.S. in Electrical and Electronics Engineering</strong> <span style="float:right;">December 2016</span></div>
    <div><em>BRAC University, Dhaka, Bangladesh</em></div>
  </div>
</div>
Completed a Bachelor of Science degree in Electrical and Electronics Engineering with a specialisation in Electronics engineering. During my undergraduate studies, I gained a strong foundation in the principles of electrical and electronics engineering, including circuit theory, digital electronics, and signal processing. I also completed a series of projects in the field of digital electronics and embedded systems which helped me to develop a strong foundation in programming and hardware prototyping.

<div style="display: flex; align-items: flex-start; margin-top: 20px; margin-bottom: 15px;">
  <img src="{{ base_path }}/images/RUMC-logo.png" alt="Rajuk Uttara Model College" style="width: 50px; height: 50px; margin-right: 15px; flex-shrink: 0;">
  <div style="flex-grow: 1;">
    <div><strong>Higher Secondary Certificate (HSC)</strong> <span style="float:right;">December 2011</span></div>
    <div><em>Rajuk Uttara Model College, Dhaka, Bangladesh</em></div>
  </div>
</div>
Completed the Higher Secondary Certificate (HSC) under the Science discipline, securing a GPA of 5.00 out of 5.00. Demonstrated exceptional academic performance in core subjects, particularly in Mathematics and Physics, which fostered strong analytical and problem-solving abilities. This academic achievement established a solid foundation for pursuing advanced studies and research in the fields of engineering and technology.

## Work experience

  <ul>
    {% for post in site.experience reversed %}
      {% if post.exp_type == "job" %}
        {% include experience-single.html %}
      {% endif %}
    {% endfor %}
  </ul>

## Research and Publications

  <ol>
  {% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}
  </ol>
  
## Skills and Expertise

### Software and Technical Skills

- **Documentation and Office Tools**: Proficient with Microsoft Office (Word, Excel, PowerPoint, Access, Project) and LaTeX for professional documentation and record keeping.
- **Machine and Deep Learning**:
  - Skilled in classical ML (scikit-learn) for regression, classification, clustering, and dimensionality reduction.
  - Proficient in deep learning frameworks (Keras, TensorFlow, PyTorch) for building and training neural networks.
  - Strong theoretical grounding in optimization algorithms (SGD, Adam, AdamW, RMSprop, etc.), probability/statistics, backpropagation, and advanced loss functions.
- **Data Analysis and Visualization**: Experienced in data wrangling and feature engineering with Pandas, NumPy, and visualisation using Matplotlib or Seaborn.
- **GPU Computing and Hardware Acceleration**: Working knowledge of NVIDIA CUDA (or similar) for faster model training and inference.
- **Version Control and Collaboration**: Proficient in Git (GitHub, GitLab) and CI/CD workflows for collaborative software development.
- **Programming Languages**: Working knowledge of *Java*, *C++*, *Python*, and *MATLAB* for algorithm development, data analysis, and numerical computing.
- **Embedded Systems and Microcontrollers/Processors**: Programmed and prototyped solutions using Arduino and Raspberry Pi, integrating sensors, actuators, and peripheral modules.
- **Hardware Prototyping**:
  - Designed schematics and PCBs using Altium (including BOM, pick-and-place files, 3D models).
  - Oversaw PCB fabrication, component soldering/assembly, and conducted functional testing.
- **Digital Electronics and FPGA Design**:
  - Implemented digital logic with Xilinx ISE, Electric VLSI, and LTspice.
  - Prototyped and validated designs on FPGA boards for functionality and timing.
- **Electronics Simulation, RF and Antenna Design**: Modeled electronic systems with AWR, Proteus, PSpice, and PSim; designed/analysed antennas using CST Studio.

### Professional and Interpersonal Skills

- **Teamwork and Collaboration**: Collaborated effectively in academic and workplace settings, balancing individual tasks and group dynamics to achieve project objectives.
- **Leadership**: Led multiple academic projects, guiding team members and ensuring successful deliverables for high-profile events.
- **Public Speaking and Presentation Skills**: Delivered numerous presentations in coursework and competitions, including research findings at international conferences and workshops.
- **Adaptability and Quick Learning**: Quickly acquired new technical skills and processes in various roles, adapting to new environments and challenges with ease.
- **Problem Solving and Critical Thinking**: Skilled in diagnosing and resolving complex technical issues, ensuring optimal performance and reliability.

### Research and Industry Knowledge

- **Research Skills**: Proficient in advanced methodologies, experimental design, data analysis, and literature reviews.
- **Electronics Test Equipment**: Skilled in operating and analysing data from RF spectrum analysers, vector signal analyzers, high-speed oscilloscopes, and RF test sets.
- **RF Implementation and Regulatory Compliance**: Hands-on experience in designing, testing, and analysing RF modules, including regression testing and certification procedures to meet regional regulatory standards.
- **Project Management**: Proficient in planning, coordination, and execution of academic and professional projects, ensuring timely delivery and quality outcomes.

## Achievements and Additional Information

- Successfully participated and completed _Empowering Innovative Leaders Program, (2024)_ at Deakin University.
- **Certifications**: <br>
  In addition to my academic qualifications, I have completed several certifications that enhance my expertise in various domains:
  <ul style="list-style-type: none; padding-left: 6px;">
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      <a href="https://coursera.org/share/a1076c994a96461d4713d99d6eeb80f0">Mathematics for Machine Learning (2025)</a>
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      <a href="https://coursera.org/share/747b87e829e15f8f66269c97c788ace1">Algorithms for Battery Management Systems (2024)</a>
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      <a href="https://portal.engineersaustralia.org.au/estage1/search?last_name=Noor&ea_id=8439763&app_id=317589">Professional Engineer (Engineers Australia, 2023)</a>
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      <a href="https://coursera.org/share/09725f762580246cf0e14fca3ff2ac90">TensorFlow Developer (DeepLearning.AI, 2022)</a>
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      <a href="https://coursera.org/share/615c9c5fe7a0e954b10e33f01729770a">IT Automation with Python (Google, 2022)</a>
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      <a href="https://www.credly.com/badges/7af5d246-c723-4541-b93d-6d9fd4a1c8d8/public_url">AI Engineering (IBM, 2021)</a>
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      <a href="https://coursera.org/share/a931a5565f0a36c5c6576cae8b1c180e">Digital Systems (UAB, 2021)</a>
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      <a href="https://coursera.org/share/c69baf09a6b1641ccd0158e7a9f9d5db">Specialisation in Programming the Internet of Things (UCI, 2020)</a>
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      <a href="https://www.udemy.com/certificate/UC-3QFUMLLF/">PCB Designing (Udemy, 2020)</a>
    </li>
  </ul>

- **Professional Badges**: <br>
<!--  -->
 I have earned several professional badges that demonstrate my skills and expertise in various areas. Notable badges include:
<div style="text-align: center; margin-top: 15px;">
  <a href="https://www.credly.com/badges/2e94fd2d-9140-471c-ae39-8223e706d50c/public_url" target="_blank"><img src="{{ base_path }}/_pages/image/cv/Machine Learning with Python.png" alt="Machine Learning with Python" style="width: 120px; height: 120px; margin-left: 15px; margin-right: 15px;"></a>
  <a href="https://www.credly.com/badges/0badd520-f66e-44bf-bb06-c27ff9b90ef3/public_url" target="_blank"><img src="{{ base_path }}/_pages/image/cv/Deep Learning Essentials with Keras.png" alt="Deep Learning Essentials with Keras" style="width: 120px; height: 120px; margin-left: 15px; margin-right: 15px;"></a>
  <a href="https://www.credly.com/badges/e5001d66-9bb7-4fc4-ac48-009b507a024c/public_url" target="_blank"><img src="{{ base_path }}/_pages/image/cv/Deep Learning with Tensorflow.png" alt="Deep Learning with Tensorflow" style="width: 120px; height: 120px; margin-left: 15px; margin-right: 15px;"></a>
  <a href="https://www.credly.com/badges/96e61788-f3d6-4959-91b2-9445a97f8d0d/public_url" target="_blank"><img src="{{ base_path }}/_pages/image/cv/Deep Neural Networks with PyTorch.png" alt="Deep Neural Networks with PyTorch" style="width: 120px; height: 120px; margin-left: 15px; margin-right: 15px;"></a>
  <a href="https://www.credly.com/badges/cff429f1-ff41-4aad-bc4d-277610a794ce/public_url" target="_blank"><img src="{{ base_path }}/_pages/image/cv/Computer Vision and Image Processing Essentials.png" alt="Computer Vision and Image Processing Essentials" style="width: 120px; height: 120px; margin-left: 15px; margin-right: 15px;"></a>
  <a href="https://www.credly.com/badges/7af5d246-c723-4541-b93d-6d9fd4a1c8d8/public_url" target="_blank"><img src="{{ base_path }}/_pages/image/cv/IBM AI Engineering Professional Certificate (V2).png" alt="IBM AI Engineering Professional Certificate" style="width: 120px; height: 120px; margin-left: 15px; margin-right: 15px;"></a>
</div>

- **Peer Reviewer:** <br>
I have reviewed papers for conferences such as `KSEM`, `AICCSA`, `ECAI`, `PAKDD` and journals such as `Pattern Recognition`, `Information fusion`, `Neurocomputing`, `Neural computing and applications`, and `MethodsX`. The updated list of my peer reviews can be found [here](https://orcid.org/0000-0002-4259-9539#:~:text=Peer%20review%20(16%20reviews%C2%A0for%207%20publications/grants)).

## References

- [**Dr. Wei Luo**, <br>Associate Professor, School of Information Technology, Deakin University, Australia](https://experts.deakin.edu.au/7851-wei-luo)
- [**Prof. Antonio Robles-Kelly**, <br>Adjunct Professor, School of Information Technology, University of Adelaide, Australia](https://www.linkedin.com/in/antonio-robles-kelly-19481835/)
- [**Dr. Mohamed R. Bouadjenek**, <br>Senior Lecturer, School of Information Technology, Deakin University, Australia](https://experts.deakin.edu.au/51849-mohamed-reda-bouadjenek)
- [**Dr. Leo Zhang**, <br>Senior Lecturer, School of Information and Communication Technology,Griffith University, Australia](https://experts.griffith.edu.au/41503-leo-zhang)