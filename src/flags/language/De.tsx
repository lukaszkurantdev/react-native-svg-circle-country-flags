import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgDe = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="de_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#de_svg__a)">
      <Path fill="#ffda44" d="m0 345 256.7-25.5L512 345v167H0z" />
      <Path fill="#d80027" d="m0 167 255-23 257 23v178H0z" />
      <Path fill="#333" d="M0 0h512v167H0z" />
    </G>
  </Svg>
);
export default SvgDe;
