import { Environment as Environment3d, Lightformer } from '@react-three/drei';

export default function Environment() {
  return (
    <Environment3d preset="city">
      <Lightformer
        intensity={8}
        position={[10, 5, 0]}
        scale={[10, 50, 1]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </Environment3d>
  );
}
