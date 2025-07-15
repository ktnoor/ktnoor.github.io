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

- **Ph.D in Computer Vision** <span style="float:right;">2025 (expected)</span>  
  _Deakin University, Victoria, Australia_  
  Pursuing a PhD in Information Technology with a research focus on developing deep learning models for image classification. Recipient of the prestigious Deakin University Postgraduate Research Scholarship (DUPR). Published multiple research papers in top-tier conferences and journals. Anticipated completion date: July 2025.

- **Master of Engineering in Electronics Engineering** <span style="float:right;">November 2019</span>  
  _Macquarie University, Sydney, Australia_  
  Achieved Vice-Chancellor’s International Scholarship and completed a Master of Engineering degree with a specialisation in Electronics Engineering. Gained in-depth knowledge in the areas of analogue and digital electronics. Adapted technical and practical skills for electronic systems and circuit design by completing electronic projects as a part of coursework.

- **B.S. in Electrical and Electronics Engineering** <span style="float:right;">December 2016</span>  
  _BRAC University, Dhaka, Bangladesh_  
  Completed a Bachelor of Science degree in Electrical and Electronics Engineering with a specialisation in Electronics engineering. During my undergraduate studies, I gained a strong foundation in the principles of electrical and electronics engineering, including circuit theory, digital electronics, and signal processing. I also completed a series of projects in the field of digital electronics and embedded systems which helped me to develop a strong foundation in programming and hardware prototyping.


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
      Battery Management Systems (2024).
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      Professional Engineer (Engineers Australia, 2023).
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      TensorFlow Developer (DeepLearning.AI, 2022).
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      IT Automation with Python (Google, 2022).
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      AI Engineering (IBM, 2021).
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      Digital Systems (UAB, 2021).
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      Specialisation in Programming the IOT (UCI, 2020).
    </li>
    <li><i class="fas fa-award" style="color: #184d1aff; margin-right: 8px;"></i>
      PCB Designing (Udemy, 2020).
    </li>
  </ul>

- **Peer Reviewer:** <br>
I have reviewed papers for conferences such as `KSEM`, `AICCSA`, `ECAI`, `PAKDD` and journals such as `Pattern Recognition`, `Information fusion`, `Neurocomputing`, `Neural computing and applications`, and `MethodsX`. The updated list of my peer reviews can be found [here](https://orcid.org/0000-0002-4259-9539#:~:text=Peer%20review%20(16%20reviews%C2%A0for%207%20publications/grants)).

## References

- [**Dr. Wei Luo**, <br>Associate Professor, School of Information Technology, Deakin University, Australia](https://experts.deakin.edu.au/7851-wei-luo)
- [**Prof. Antonio Robles-Kelly**, <br>Professor, School of Information Technology, Deakin University, Australia](https://experts.deakin.edu.au/45485-antonio-robleskelly)
- [**Dr. Mohamed R. Bouadjenek**, <br>Senior Lecturer, School of Information Technology, Deakin University, Australia](https://experts.deakin.edu.au/51849-mohamed-reda-bouadjenek)
- [**Dr. Leo Zhang**, <br>Senior Lecturer, School of Information and Communication Technology,Griffith University, Australia](https://experts.griffith.edu.au/41503-leo-zhang)