import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLy = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ly_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ly_svg__a)">
      <Path
        fill="#333"
        d="m0 144.7 257-22.4 255 22.4v222.6l-254.9 31L0 367.3z"
      />
      <Path fill="#d80027" d="M0 0h512v144.7H0z" />
      <Path fill="#496e2d" d="M0 367.3h512V512H0z" />
      <G fill="#eee">
        <Path d="m315.6 209.3 21 29 34-11-21 29 21 28.8-34-11-21 29v-36l-34-11 34-11z" />
        <Path d="M258.3 328.4a72.3 72.3 0 1 1 34.4-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.4 8.7z" />
      </G>
    </G>
  </Svg>
);
export default SvgLy;
