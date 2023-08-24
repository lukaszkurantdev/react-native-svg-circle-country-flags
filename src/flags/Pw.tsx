import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPw = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="pw_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#pw_svg__a)">
      <Path fill="#338af3" d="M0 0h512v512H0z" />
      <Circle cx={200.3} cy={256} r={111.3} fill="#ffda44" />
    </G>
  </Svg>
);
export default SvgPw;
