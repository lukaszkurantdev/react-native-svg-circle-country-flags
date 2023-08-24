import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="gf_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#gf_svg__a)">
      <Path fill="#6da544" d="m0 0 216.9 301.6L512 512V0z" />
      <Path fill="#ffda44" d="m0 0 512 512H0z" />
      <Path fill="#d80027" d="m256 121 90 270-234-168h288L166 391z" />
    </G>
  </Svg>
);
export default SvgGf;
