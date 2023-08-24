import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgDz = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="dz_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#dz_svg__a)">
      <Path fill="#496e2d" d="M0 0h256l45.3 251.8L256 512H0z" />
      <Path fill="#eee" d="M256 0h256v512H256z" />
      <G fill="#d80027">
        <Path d="m311 206.9-21 29-34-11 21 28.8-21 29 34-11.1 21 29v-35.8l34-11.1-34-11z" />
        <Path d="M277.2 328.3a72.3 72.3 0 1 1 34.5-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.5 8.7z" />
      </G>
    </G>
  </Svg>
);
export default SvgDz;
