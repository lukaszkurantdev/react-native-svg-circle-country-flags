import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEsCn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="es-cn_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#es-cn_svg__a)">
      <Path fill="#338af3" d="M167 0h178l32.3 257L345 512H167l-25.3-256z" />
      <Path fill="#eee" d="M0 0h166.9v512H0z" />
      <Path fill="#ffda44" d="M344.9 0H512v512H344.9z" />
    </G>
  </Svg>
);
export default SvgEsCn;
