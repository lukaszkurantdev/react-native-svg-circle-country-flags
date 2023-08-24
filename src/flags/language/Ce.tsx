import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCe = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ce_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ce_svg__a)">
      <Path fill="#d80027" d="m96 357 208-32 208 32v155H96l-32-78Z" />
      <Path fill="#496e2d" d="M96 0h416v293l-208 32-208-32-32-147Z" />
      <Path fill="#eee" d="M0 0v512h96V357h416v-64H96V0Z" />
    </G>
  </Svg>
);
export default SvgCe;
