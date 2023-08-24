import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMg = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="mg_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#mg_svg__a)">
      <Path fill="#eee" d="M0 0h167l45.6 257.6L167.1 512H0z" />
      <Path fill="#d80027" d="M167 0h345v256l-176.7 53.5L166.9 256z" />
      <Path fill="#6da544" d="M167 256h345v256H167z" />
    </G>
  </Svg>
);
export default SvgMg;
