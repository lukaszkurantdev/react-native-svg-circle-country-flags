import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgOr = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="or_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#or_svg__a)">
      <Path fill="#ffda44" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <Path fill="#d80027" d="M0 0h512v160H0Z" />
      <Path fill="#eee" d="M0 352h512v160H0Z" />
    </G>
  </Svg>
);
export default SvgOr;
