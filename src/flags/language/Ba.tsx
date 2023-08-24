import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBa = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ba_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ba_svg__a)">
      <Path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <Path fill="#338af3" d="M0 0h512v160H0Z" />
      <Path fill="#496e2d" d="M0 352h512v160H0Z" />
      <Circle cx={256} cy={256} r={64} fill="#ffda44" />
    </G>
  </Svg>
);
export default SvgBa;
