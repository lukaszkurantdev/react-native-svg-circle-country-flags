import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="bn_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#bn_svg__a)">
      <Path fill="#496e2d" d="M0 0h512v512H0z" />
      <Circle cx={200.3} cy={256} r={111.3} fill="#d80027" />
    </G>
  </Svg>
);
export default SvgBn;
