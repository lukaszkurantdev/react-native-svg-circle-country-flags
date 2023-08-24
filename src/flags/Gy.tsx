import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGy = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="gy_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#gy_svg__a)">
      <Path fill="#6da544" d="M77.7 0H512v512H77.8z" />
      <Path fill="#eee" d="M425.4 254.7 31.4 512h46.4L512 256 77.7 0H31.4z" />
      <Path fill="#ffda44" d="M256 256 31.4 512l436.8-256L31.4 0z" />
      <Path fill="#333" d="M0 0v1.8l219.6 253.8L0 510v2h31.4l256-256L31.4 0z" />
      <Path fill="#d80027" d="M0 0v512l256-256L0 0z" />
    </G>
  </Svg>
);
export default SvgGy;
