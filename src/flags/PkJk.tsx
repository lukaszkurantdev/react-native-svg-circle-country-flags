import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPkJk = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="pk-jk_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#pk-jk_svg__a)">
      <Path fill="#ff9811" d="M0 0h224l32 88-32 88-96 32L0 176Z" />
      <Path
        fill="#eee"
        d="m0 224 256-32 256 32v48l-32 24 32 24v48l-32 24 32 24v48l-256 32L0 464v-48l32-24-32-24v-48l32-24-32-24Z"
      />
      <Path
        fill="#496e2d"
        d="M224 0v176H0v48h512V0ZM0 272v48h512v-48zm0 96v48h512v-48zm0 96v48h512v-48z"
      />
      <Circle cx={355.6} cy={110.2} r={80.5} fill="#eee" />
      <Circle cx={376.2} cy={91.9} r={73.8} fill="#496e2d" />
      <Path fill="#eee" d="m370 76 47-20-27 44-4-50 34 38z" />
    </G>
  </Svg>
);
export default SvgPkJk;
