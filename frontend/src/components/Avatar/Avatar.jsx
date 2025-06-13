// src/components/Portfolio/HeroSection/Avatar3D/Avatar3D.jsx
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import styles from './Avatar.module.css';

const Avatar = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef();
  const [modelLoaded, setModelLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [containerSize, setContainerSize] = useState({ width: 400, height: 400 });

  // Function to calculate responsive size
  const calculateSize = () => {
    const minSize = 350;
    const maxSize = 600;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
    // Base size on viewport, but keep it reasonable
    let size = Math.min(vw * 0.4, vh * 0.5);
    size = Math.max(minSize, Math.min(maxSize, size));
    
    // Make it square
    return { width: size, height: size };
  };

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    // Calculate initial size
    const size = calculateSize();
    setContainerSize(size);

    // Avatar Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(size.width, size.height);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;

    mountRef.current.appendChild(renderer.domElement);
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Enhanced lighting for better model visibility
    const ambientLight = new THREE.AmbientLight(0x404040, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 5, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x00ffcc, 0.6);
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xff6600, 0.4);
    rimLight.position.set(0, -5, -5);
    scene.add(rimLight);

    // Variables for the loaded model
    let avatarModel = null;
    let mixer = null;

    // Load GLB Model
    const loader = new GLTFLoader();
    
    loader.load(
      '../../src/model/684003464dd7d2ae2bf40688.glb',
      
      // onLoad callback
      (gltf) => {
        console.log('Model loaded successfully:', gltf);
        
        avatarModel = gltf.scene;
        
        // Calculate bounding box to properly center and scale the model
        const box = new THREE.Box3().setFromObject(avatarModel);
        const center = box.getCenter(new THREE.Vector3());
        const boxSize = box.getSize(new THREE.Vector3());
        
        // Center the model
        avatarModel.position.sub(center);
        
        // Scale the model responsively
        const maxDim = Math.max(boxSize.x, boxSize.y, boxSize.z);
        const desiredSize = size.width > 400 ? 7 : 5.5; // Bigger on larger screens
        const scale = desiredSize / maxDim;
        avatarModel.scale.setScalar(scale);
        
        // Final position adjustment
        avatarModel.position.y -= 2;
        
        // Enable shadows and improve materials
        avatarModel.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            
            if (child.material) {
              child.material.needsUpdate = true;
              // Enhance material properties for better rendering
              if (child.material.map) {
                child.material.map.flipY = false;
              }
            }
          }
        });
        
        scene.add(avatarModel);
        setModelLoaded(true);
        
        // Setup animations if they exist
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(avatarModel);
          const action = mixer.clipAction(gltf.animations[0]);
          action.play();
          console.log('Available animations:', gltf.animations.map(anim => anim.name));
        }
      },
      
      // onProgress callback
      (progress) => {
        if (progress.total > 0) {
          const progressPercent = (progress.loaded / progress.total) * 100;
          setLoadingProgress(progressPercent);
        }
      },
      
      // onError callback
      (error) => {
        console.error('Error loading GLB model:', error);
        setModelLoaded(true); // Set to true to remove loading screen even on error
      }
    );

    // Floating data nodes (responsive count based on screen size)
    const nodes = [];
    const nodeCount = size.width > 400 ? 8 : 6;
    
    for (let i = 0; i < nodeCount; i++) {
      const nodeGeometry = new THREE.SphereGeometry(0.08, 8, 8);
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0080,
        transparent: true,
        opacity: 0.7
      });
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);

      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = size.width > 400 ? 4 : 3.2;
      
      node.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 1.5,
        Math.sin(angle) * radius
      );

      node.userData = { angle: angle, radius: radius };
      nodes.push(node);
      scene.add(node);
    }

    // Position camera responsively
    const cameraDistance = size.width > 400 ? 6 : 5.5;
    camera.position.set(0, 1, cameraDistance);
    camera.lookAt(0, 0, 0);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      const delta = clock.getDelta();

      // Update mixer for model animations
      if (mixer) {
        mixer.update(delta);
      }

      // Avatar rotation (smooth and slow)
      if (avatarModel) {
        avatarModel.rotation.y += 0.006;
      }

      // Animate data nodes
      nodes.forEach((node, index) => {
        const nodeTime = time + index * 0.5;
        node.position.x = Math.cos(node.userData.angle + nodeTime * 0.3) * node.userData.radius;
        node.position.z = Math.sin(node.userData.angle + nodeTime * 0.3) * node.userData.radius;
        node.position.y = Math.sin(nodeTime * 0.8) * 1.2;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (mountRef.current && renderer) {
        const newSize = calculateSize();
        setContainerSize(newSize);
        
        camera.aspect = 1;
        camera.updateProjectionMatrix();
        renderer.setSize(newSize.width, newSize.height);
        
        // Adjust node positions for new size
        const newRadius = newSize.width > 400 ? 4 : 3.2;
        nodes.forEach(node => {
          node.userData.radius = newRadius;
        });
        
        // Adjust camera distance
        const newCameraDistance = newSize.width > 400 ? 6 : 5.5;
        camera.position.setZ(newCameraDistance);
      }
    };

    // Debounced resize handler
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mixer) {
        mixer.stopAllAction();
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
      }
      
      // Dispose of Three.js resources
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatarWrapper}>
        <div 
          className={styles.viewport}
          style={{
            width: containerSize.width,
            height: containerSize.height
          }}
        >
          <div ref={mountRef} className={styles.scene} />

          {/* Loading indicator */}
          {!modelLoaded && (
            <div className={styles.loadingOverlay}>
              <div className={styles.loadingSpinner}></div>
              <div className={styles.loadingText}>
                Loading Avatar...
              </div>
              <div className={styles.loadingBar}>
                <div 
                  className={styles.loadingProgress} 
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* HUD Elements */}
          <div className={styles.hud}>
            <div className={styles.status}>
              <div className={styles.statusIndicator}></div>
              <span>ONLINE</span>
            </div>
          </div>

        </div>

        {/* Holographic UI Elements */}
        <div className={styles.holoElement1}></div>
        <div className={styles.holoElement2}></div>
        <div className={styles.holoElement3}></div>
        <div className={styles.holoElement4}></div>
      </div>
    </div>
  );
};

export default Avatar;