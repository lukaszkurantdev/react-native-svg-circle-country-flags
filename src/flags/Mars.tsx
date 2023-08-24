import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMars = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="mars_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#mars_svg__a)">
      <Path fill="#6da544" d="M170 0h172l32 256-32 256H170l-32-256Z" />
      <Path fill="#d80027" d="M0 0h170v512H0Z" />
      <Path fill="#0052b4" d="M342 0h170v512H342Z" />
    </G>
  </Svg>
);
export default SvgMars;
