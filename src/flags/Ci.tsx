import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCi = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ci_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ci_svg__a)">
      <Path fill="#eee" d="M167 0h178l31 253.2L345 512H167l-33.4-257.4z" />
      <Path fill="#ff9811" d="M0 0h167v512H0z" />
      <Path fill="#6da544" d="M345 0h167v512H345z" />
    </G>
  </Svg>
);
export default SvgCi;
