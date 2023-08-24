import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGl = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="gl_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#gl_svg__a)">
      <Path fill="#d80027" d="m0 256 259-45.3L512 256v256H0z" />
      <Path fill="#eee" d="M0 0h512v256H0z" />
      <Path fill="#eee" d="M55.7 256a122.4 122.4 0 1 0 244.8 0l-123-24z" />
      <Path fill="#d80027" d="M55.7 256a122.4 122.4 0 1 1 244.8 0z" />
    </G>
  </Svg>
);
export default SvgGl;
