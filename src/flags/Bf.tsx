import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="bf_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#bf_svg__a)">
      <Path fill="#d80027" d="M0 0h512v256l-255.2 48L0 256z" />
      <Path fill="#6da544" d="M0 256h512v256H0z" />
      <Path
        fill="#ffda44"
        d="m256 167 19.3 59.5H338l-50.6 36.8 19.3 59.5L256 286l-50.6 36.8 19.3-59.5-50.6-36.8h62.6z"
      />
    </G>
  </Svg>
);
export default SvgBf;
