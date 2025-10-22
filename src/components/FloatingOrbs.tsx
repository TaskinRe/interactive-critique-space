import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const AnimatedOrb = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
        metalness={0.1}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
};

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-40" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedOrb position={[-2, 0, 0]} color="#3b82f6" />
        <AnimatedOrb position={[2, -1, -1]} color="#f59e0b" />
        <AnimatedOrb position={[0, 2, -2]} color="#06b6d4" />
      </Canvas>
    </div>
  );
};

export default FloatingOrbs;
