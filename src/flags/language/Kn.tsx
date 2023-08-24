import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgKn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="kn_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#kn_svg__a)">
      <Path fill="#d80027" d="m0 256 256.5-36.4L512 256v256H0z" />
      <Path fill="#ffda44" d="M0 0h512v256H0z" />
    </G>
  </Svg>
);
export default SvgKn;
