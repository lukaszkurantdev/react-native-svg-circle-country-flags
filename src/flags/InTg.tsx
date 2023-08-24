import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgInTg = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="in-tg_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#in-tg_svg__a)">
      <Path fill="#eee" d="M0 0h512v128l-256 64L0 128Z" />
      <Path fill="#338af3" d="M0 128h512v128l-256 64L0 256Z" />
      <Path fill="#ff9811" d="M0 256h512v128l-256 64L0 384Z" />
      <Path fill="#496e2d" d="M0 384h512v128H0z" />
    </G>
  </Svg>
);
export default SvgInTg;
