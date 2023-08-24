import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgUsTx = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="us-tx_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#us-tx_svg__a)">
      <Path fill="#0052b4" d="M0 0h167l64 256-64 256H0Z" />
      <Path
        fill="#eee"
        d="m43.5 317 104-75h-128l104 75-40-122zM167 0h345v256l-173 64-172-64Z"
      />
      <Path fill="#d80027" d="M167 256h345v256H167z" />
    </G>
  </Svg>
);
export default SvgUsTx;
