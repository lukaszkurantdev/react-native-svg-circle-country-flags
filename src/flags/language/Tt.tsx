import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="tt_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#tt_svg__a)">
      <Path fill="#eee" d="m0 224 256-32 256 32v64l-256 32L0 288Z" />
      <Path fill="#496e2d" d="M0 0h512v224H0z" />
      <Path fill="#d80027" d="M0 288h512v224H0z" />
    </G>
  </Svg>
);
export default SvgTt;
