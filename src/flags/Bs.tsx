import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBs = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="bs_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#bs_svg__a)">
      <Path fill="#338af3" d="M0 0h512v167l-37.4 89 37.4 89v167H0l49.6-252z" />
      <Path fill="#ffda44" d="M108.3 167H512v178H108.3z" />
      <Path fill="#333" d="M0 0v512l256-256L0 0z" />
    </G>
  </Svg>
);
export default SvgBs;
