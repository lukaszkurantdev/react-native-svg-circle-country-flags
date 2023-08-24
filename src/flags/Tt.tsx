import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="tt_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#tt_svg__a)">
      <Path fill="#d80027" d="M0 110.2 110.2 0H512v401.8L401.8 512H0z" />
      <Path fill="#eee" d="M110.2 0H63L0 63v47.2L401.8 512H449l63-63v-47.2z" />
      <Path fill="#333" d="M512 512v-63L63 0H0v63l449 449z" />
    </G>
  </Svg>
);
export default SvgTt;
