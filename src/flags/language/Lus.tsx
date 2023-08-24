import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLus = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="lus_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#lus_svg__a)">
      <Path fill="#eee" d="M0 0h512v256l-256 32L0 256Z" />
      <Path fill="#338af3" d="M0 256h512v256H0Z" />
      <Circle cx={256} cy={256} r={128} fill="#d80027" />
    </G>
  </Svg>
);
export default SvgLus;
