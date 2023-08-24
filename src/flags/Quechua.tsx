import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgQuechua = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="quechua_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#quechua_svg__a)">
      <Path fill="#4a1f63" d="M0 512h512v-70l-256-32L0 442Z" />
      <Path fill="#0052b4" d="M0 442h512v-70l-256-32L0 372Z" />
      <Path fill="#d80027" d="M0 0h512v70l-256 32L0 70Z" />
      <Path fill="#ffda44" d="M0 70h512v70l-256 32L0 140Z" />
      <Path fill="#eee" d="M0 140h512v70l-32 46 32 46v70H0v-70l32-46-32-46Z" />
      <Path fill="#496e2d" d="M0 210h512v92H0z" />
    </G>
  </Svg>
);
export default SvgQuechua;
