import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgYu = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="yu_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#yu_svg__a)">
      <Path fill="#eee" d="m0 167 256-32 256 32v178l-256 32L0 345Z" />
      <Path fill="#d80027" d="M0 345h512v167H0Z" />
      <Path fill="#0052b4" d="M0 0h512v167H0Z" />
      <Path fill="#ffda44" d="m137 413 309-222H66l309 222L256 51Z" />
      <Path fill="#d80027" d="m183 350 189-136H140l188 136-72-221z" />
    </G>
  </Svg>
);
export default SvgYu;
