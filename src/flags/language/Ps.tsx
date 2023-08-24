import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPs = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ps_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ps_svg__a)">
      <Path
        fill="#d80027"
        d="M144.7 0h222.6l37 257.7-37 254.3H144.7l-42.4-255.2z"
      />
      <Path fill="#496e2d" d="M367.3 0H512v512H367.3z" />
      <Path fill="#333" d="M0 0h144.7v512H0z" />
      <G fill="#ffda44">
        <Path d="M256 167a89 89 0 1 0 0 178 89 89 0 0 0 0-178zm0 144.7a55.7 55.7 0 1 1 0-111.4 55.7 55.7 0 0 1 0 111.4z" />
        <Path d="M256 222.6c-12.3 0-22.3 10-22.3 22.3v33.4h44.6v-33.4c0-12.3-10-22.3-22.3-22.3z" />
      </G>
    </G>
  </Svg>
);
export default SvgPs;
