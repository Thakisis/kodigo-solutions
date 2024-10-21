import {
  Bloom,
  EffectComposer,
  N8AO,
  TiltShift2,
} from '@react-three/postprocessing';

export default function Effects() {
  return (
    <EffectComposer disableNormalPass>
      <N8AO aoRadius={1} intensity={2} />
      <Bloom mipmapBlur luminanceThreshold={0.8} intensity={2} levels={8} />
      <TiltShift2 blur={0.2} />
    </EffectComposer>
  );
}
