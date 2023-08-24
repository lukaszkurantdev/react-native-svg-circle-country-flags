import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="tn_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#tn_svg__a)">
      <Path fill="#d80027" d="M0 0h512v512H0z" />
      <Circle cx={256} cy={256} r={122.4} fill="#eee" />
      <G fill="#d80027">
        <Path d="m271 209.2 21 29 34.1-11.1-21 29 21 28.9-34-11.1-21 29V267L237 256l34-11z" />
        <Path d="M283.8 328.3a72.3 72.3 0 1 1 34.4-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.4 8.7z" />
      </G>
    </G>
  </Svg>
);
export default SvgTn;
