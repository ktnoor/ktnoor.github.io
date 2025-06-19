---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div id="3d-container" style="width: 100%; height: 400px; margin: 20px 0; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/OBJLoader.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<script>
// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

const container = document.getElementById('3d-container');
renderer.setSize(container.offsetWidth, container.offsetHeight);
renderer.setClearColor(0xf8f9fa, 1);
container.appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 10, 5);
scene.add(directionalLight);

// Add orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Load 3D object
const loader = new THREE.OBJLoader();
loader.load(
    '/images/hello.obj',
    function (object) {
        // Center the object
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        object.position.sub(center);
        
        // Scale the object to fit nicely
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 5 / maxDim;
        object.scale.setScalar(scale);
        
        // Add material to make it visible
        object.traverse(function (child) {
            if (child.isMesh) {
                child.material = new THREE.MeshPhongMaterial({ 
                    color: 0x007bff,
                    transparent: true,
                    opacity: 0.8
                });
            }
        });
        
        scene.add(object);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('An error occurred loading the 3D object:', error);
        // Add a fallback message
        const fallback = document.createElement('div');
        fallback.style.textAlign = 'center';
        fallback.style.padding = '50px';
        fallback.style.color = '#666';
        fallback.innerHTML = '<h3>3D Object Viewer</h3><p>Interactive 3D model would be displayed here</p>';
        container.appendChild(fallback);
    }
);

// Position camera
camera.position.z = 10;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', function() {
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});

animate();
</script>

I am a dedicated researcher in machine learning and computer vision, specialising in hierarchical classification and deep learning architectures. Currently, I am completing my PhD in Computer Vision, focusing on Neural Architectures for Hierarchical Classification by Agreement. My work involves designing and implementing advanced neural network models to enhance classification accuracy and interpretability across diverse domains, including facial recognition, medical imaging, and underwater sensing.

My research interests include capsule networks, hierarchical multi-label classification (HMC), and agreement-based learning mechanisms. I have developed novel deep learning models, which leverage hierarchical taxonomy structures for improved decision-making in complex classification tasks. I am also actively engaged in optimising feature extraction, routing mechanisms, and saliency-based visualisation techniques in deep networks.

Beyond my research, I am passionate about applying machine learning solutions to real-world problems, bridging the gap between theory and practice. I am keen on contributing to academia and industry through publications, collaborations, and innovative AI-driven applications.

Feel free to connect with me to discuss research opportunities, collaborations, or AI-driven solutions.

## Research Interests
Throughout my academic and professional journey, I have developed a keen interest in various aspects of Artificial Intelligence, Computer Vision, Machine Learning, and Deep Learning. My research interests include:
- Developing novel deep learning architectures for task-specific applications.
- Exploring the intersection of computer vision and natural language processing.
- Investigating the use of hierarchical structures in multi-label classification tasks.
- Enhancing the interpretability and explainability of deep learning models.
- Applying machine learning techniques to real-world problems in various domains, including healthcare, robotics, and environmental monitoring.

## Education
My educational background includes a Bachelor's degree in Electrical and Electronics Engineering, followed by a Master's degree in Electronics Engineering. I am currently pursuing a PhD in Computer Vision, where I am focusing on the development of advanced neural architectures for various classification tasks. My academic journey has equipped me with a strong foundation in digital electronics, signal processing, computer vision, machine learning, and deep learning. 

## Work Experience
I have had the opportunity to work on various projects in both academic and industrial settings. These experiences have allowed me to apply my theoretical knowledge to practical problems, enhancing my skills in software development, data analysis, and project management. I have collaborated with interdisciplinary teams, contributing to the successful completion of projects in areas such as image processing, machine learning, deep learning, and computer vision. The details of my work experience can be found on my [Experience page](./experience/).


## Publications
I have authored and co-authored several research papers, articles, and conference presentations. My work has been published in reputable journals and conferences, contributing to the advancement of knowledge in the fields of machine learning and computer vision. The details of my publications can be found on my [Publications page](./publications/).

## Contact
I am always open to discussions, collaborations, and research opportunities. If you would like to get in touch with me, please feel free to reach out via [Email](mailto:k.noor@research.deakin.edu.au,ktnoor.ai@gmail.com).