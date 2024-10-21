'use client';

import { MeshTransmissionMaterial } from '@react-three/drei';
import { Canvas as Canvas3d, useFrame } from '@react-three/fiber';
import { SphereGeometry } from 'three';

import TextPlane from './Text';
import Effects from './effects';
import Environment from './environment';
import Rig from './rig-camera';

export default function Canvas() {
  return (
    <Canvas3d
      shadows
      gl={{ preserveDrawingBuffer: true }}
      eventSource={document.body}
      eventPrefix="client"
      camera={{ position: [0, 0, 20], fov: 50 }}
    >
      <color attach="background" args={['#101010']} />
      <Effects />
      <Environment />
      <TextPlane />
      <Rig />
      <Knot />
    </Canvas3d>
  );
}

const Knot = (props) => (
  <mesh receiveShadow castShadow {...props}>
    <sphereGeometry args={[5, 64, 64]} />
    <MeshTransmissionMaterial
      transmission={1}
      thickness={3}
      chromaticAberration={0.2}
    />
  </mesh>
);
