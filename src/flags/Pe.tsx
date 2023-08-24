import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPe = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="pe_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#pe_svg__a)">
      <Path
        fill="#d80027"
        d="M0 0h167l86 41.2L345 0h167v512H345l-87.9-41.4L167 512H0z"
      />
      <Path fill="#eee" d="M167 0h178v512H167z" />
    </G>
  </Svg>
);
export default SvgPe;
