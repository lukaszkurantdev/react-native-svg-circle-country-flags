import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAuAboriginal = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="au-aboriginal_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#au-aboriginal_svg__a)">
      <Path fill="#333" d="M0 0h512v256l-256 32L0 256Z" />
      <Path fill="#d80027" d="M0 256h512v256H0Z" />
      <Circle cx={256} cy={256} r={128} fill="#ffda44" />
    </G>
  </Svg>
);
export default SvgAuAboriginal;
