import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import React from 'react';

const AnimatedSphere = () => {
  const meshRef = React.useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = React.useState(false);

  const springs = useSpring({
    scale: hovered ? [1.2, 1.2, 1.2] : [1, 1, 1],
    color: hovered ? '#6366f1' : '#4f46e5',
    config: { mass: 2, tension: 170, friction: 12 }
  });

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
  });

  return (
    <animated.mesh
      ref={meshRef}
      scale={springs.scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={springs.color}
        envMapIntensity={0.8}
        clearcoat={0.8}
        clearcoatRoughness={0}
        roughness={0.1}
        distort={0.4}
        speed={2}
      />
    </animated.mesh>
  );
};

const AnimatedCube = () => {
  const meshRef = React.useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = React.useState(false);

  const springs = useSpring({
    scale: hovered ? [1.2, 1.2, 1.2] : [0.8, 0.8, 0.8],
    rotation: hovered ? [Math.PI / 4, Math.PI / 4, 0] : [0, 0, 0],
    color: hovered ? '#8b5cf6' : '#6366f1',
    config: { mass: 2, tension: 170, friction: 12 }
  });

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <animated.mesh
      ref={meshRef}
      scale={springs.scale}
      rotation={springs.rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <MeshDistortMaterial
        color={springs.color}
        envMapIntensity={0.8}
        clearcoat={0.8}
        clearcoatRoughness={0}
        roughness={0.1}
        distort={0.2}
        speed={2}
      />
    </animated.mesh>
  );
};

const Scene = () => {
  return (
    <Canvas className="h-[400px]">
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
        position={[-1.5, 0, 0]}
      >
        <AnimatedCube />
      </Float>
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
        position={[1.5, 0, 0]}
      >
        <AnimatedSphere />
      </Float>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Scene;