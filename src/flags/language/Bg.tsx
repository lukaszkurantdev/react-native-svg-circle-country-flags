import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBg = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="bg_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#bg_svg__a)">
      <Path
        fill="#496e2d"
        d="m0 166.9 258-31.7 254 31.7v178l-251.4 41.3L0 344.9z"
      />
      <Path fill="#eee" d="M0 0h512v166.9H0z" />
      <Path fill="#d80027" d="M0 344.9h512V512H0z" />
    </G>
  </Svg>
);
export default SvgBg;
