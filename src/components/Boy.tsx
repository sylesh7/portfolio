'use client';
import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/boy.glb');
  const modelRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (modelRef.current) {
      const { x, y } = state.mouse;
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        x * (Math.PI / 4),
        0.02
      );
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        -y * (Math.PI / 4),
        0.02
      );
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      position={[0, -1.5, 0]}
      scale={1.5}
    />
  );
};

export default function Boy() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="city" />
        <Model />
      </Canvas>
    </div>
  );
}
