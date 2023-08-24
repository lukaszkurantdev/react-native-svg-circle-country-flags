import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="in_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#in_svg__a)">
      <Path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352z" />
      <Path fill="#ff9811" d="M0 0h512v160H0Z" />
      <Path fill="#6da544" d="M0 352h512v160H0Z" />
      <Circle cx={256} cy={256} r={72} fill="#0052b4" />
      <Circle cx={256} cy={256} r={48} fill="#eee" />
      <Circle cx={256} cy={256} r={24} fill="#0052b4" />
    </G>
  </Svg>
);
export default SvgIn;
