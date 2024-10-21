import { Html, Text } from '@react-three/drei';

import { usePathname } from '@/i18n/routing';

export default function TextPlane(props) {
  const pathname = usePathname();
  const text = pathname;
  return (
    <Text
      fontSize={6}
      letterSpacing={-0.025}
      font={'/fonts/Inter-Regular.woff'}
      color="white"
      position={[0, 0, -10]}
      {...props}
    >
      {text}
      <Html style={{ color: 'transparent', fontSize: '33.5em' }} transform>
        {text}
      </Html>
    </Text>
  );
}
