import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgKw = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="kw_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#kw_svg__a)">
      <Path fill="#eee" d="M138.4 147 512 167v178l-373.6 20z" />
      <Path fill="#6da544" d="m0 0 138.4 167H512V0z" />
      <Path fill="#d80027" d="m0 512 138.4-167H512v167z" />
      <Path fill="#333" d="M167 167 0 0v512l167-167z" />
    </G>
  </Svg>
);
export default SvgKw;
