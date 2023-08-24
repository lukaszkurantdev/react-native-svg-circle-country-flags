import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMr = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="mr_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#mr_svg__a)">
      <Path fill="#496e2d" d="M0 0h512v512H0z" />
      <G fill="#ffda44">
        <Path d="M256 295.8a89 89 0 0 1-87-70 89.4 89.4 0 0 0-2 19 89 89 0 1 0 178 0 89.4 89.4 0 0 0-2-19 89 89 0 0 1-87 70z" />
        <Path d="m256 178 8.3 25.6H291l-21.7 15.8 8.3 25.5L256 229l-21.7 15.8 8.3-25.5-21.7-15.8h26.8z" />
      </G>
    </G>
  </Svg>
);
export default SvgMr;
