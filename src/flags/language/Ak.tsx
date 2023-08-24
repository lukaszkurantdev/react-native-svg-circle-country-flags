import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAk = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ak_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ak_svg__a)">
      <Path fill="#ffda44" d="m0 167 256-32 256 32v178l-256 32L0 345Z" />
      <Path fill="#d80027" d="M0 0h512v167H0Z" />
      <Path fill="#496e2d" d="M0 345h512v167H0Z" />
      <Path fill="#333" d="m198 345 151-109H163l151 109-58-178Z" />
    </G>
  </Svg>
);
export default SvgAk;
