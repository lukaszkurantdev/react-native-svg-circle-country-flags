import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSd = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="sd_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#sd_svg__a)">
      <Path fill="#eee" d="M43.6 109.4 512 144.7v222.6L43.8 397.2z" />
      <Path fill="#d80027" d="M0 0h512v144.7H111z" />
      <Path fill="#333" d="M111 367.3h401V512H0z" />
      <Path fill="#496e2d" d="M0 0v512l256-256z" />
    </G>
  </Svg>
);
export default SvgSd;
