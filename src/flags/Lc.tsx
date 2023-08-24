import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="lc_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#lc_svg__a)">
      <Path fill="#338af3" d="M0 0h512v512H0z" />
      <Path fill="#eee" d="M161.4 345h189.2L256 122.4z" />
      <Path fill="#333" d="M194.3 322.8 256 182.4l61.7 140.4z" />
      <Path fill="#ffda44" d="M161.4 345h189.2L256 256z" />
    </G>
  </Svg>
);
export default SvgLc;
