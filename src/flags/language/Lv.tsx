import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLv = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="lv_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#lv_svg__a)">
      <Path
        fill="#a2001d"
        d="M0 0h512v189.2l-38.5 70 38.5 63.6V512H0V322.8l39.4-63L0 189.1z"
      />
      <Path fill="#eee" d="M0 189.2h512v133.6H0z" />
    </G>
  </Svg>
);
export default SvgLv;
