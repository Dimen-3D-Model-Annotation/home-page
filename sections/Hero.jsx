"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.set(-5, 0, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.DodecahedronGeometry(8);
    const material = new THREE.MeshPhongMaterial({ 
      color: "#6A00FF",
      shininess: 100, 
    });
    const dodecahedron = new THREE.Mesh(geometry, material);
    scene.add(dodecahedron);

    dodecahedron.position.x = -10; 
    scene.add(dodecahedron);

    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: "#B48FFF" }); // Lighter shade of 6A00FF
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    scene.add(edges);


    edges.position.x = -10;
    scene.add(edges);

    // shiny wenna
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Animation
    const animate = function () {
      requestAnimationFrame(animate);

      dodecahedron.rotation.x += 0.01;
      dodecahedron.rotation.y += 0.01;
      dodecahedron.rotation.z += 0.01;

      edges.rotation.x += 0.01; // Sync edge rotation with the dodecahedron
      edges.rotation.y += 0.01; // Sync edge rotation with the dodecahedron
      edges.rotation.z += 0.01; // Sync edge rotation with the dodecahedron

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center w-full px-32 py-32 bg-black space-y-10 lg:space-y-0">
 
      <div className="flex flex-col  pl-80">
        
        <p className="font-inter text-[50px] leading-tight text-white">
          Make 3D model annotation <br/>easier with{" "}
          <span className="text-theme1 font-fredoka">Dimen.</span>
        </p>

        <div className="mt-6">
          <button className="bg-theme1 text-white py-4 px-8 rounded-full text-lg font-medium hover:bg-[#5200cc] transition">
            Get Started for Free
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center pt-16 lg:pt-0 pr-80">
        <div ref={mountRef} className="w-[400px] h-[400px]"></div>
      </div>
    </section>
  );
}
