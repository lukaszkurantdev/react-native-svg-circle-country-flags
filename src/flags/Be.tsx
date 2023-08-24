import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBe = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="be_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#be_svg__a)">
      <Path fill="#333" d="M0 0h167l38.2 252.6L167 512H0z" />
      <Path fill="#d80027" d="M345 0h167v512H345l-36.7-256z" />
      <Path fill="#ffda44" d="M167 0h178v512H167z" />
    </G>
  </Svg>
);
export default SvgBe;
