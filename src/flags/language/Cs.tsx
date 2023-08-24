import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCs = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="cs_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#cs_svg__a)">
      <Path fill="#eee" d="M0 0h512v256l-265 45.2z" />
      <Path fill="#d80027" d="M210 256h302v256H0z" />
      <Path fill="#0052b4" d="M0 0v512l256-256L0 0z" />
    </G>
  </Svg>
);
export default SvgCs;
