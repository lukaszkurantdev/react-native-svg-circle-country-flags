import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCg = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="cg_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#cg_svg__a)">
      <Path fill="#ffda44" d="M384 0h128v128L352 352 128 512H0V384l160-224Z" />
      <Path fill="#6da544" d="M0 384 384 0H0Z" />
      <Path fill="#d80027" d="M512 128 128 512h384z" />
    </G>
  </Svg>
);
export default SvgCg;
