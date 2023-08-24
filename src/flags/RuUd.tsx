import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgRuUd = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ru-ud_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ru-ud_svg__a)">
      <Path fill="#eee" d="M160 0h192l32 256-32 256H160l-32-256Z" />
      <Path fill="#333" d="M0 0h160v512H0Z" />
      <Path
        fill="#d80027"
        d="M352 0h160v512H352ZM229 176l107 107H176l107-107v160L176 229h160L229 336Z"
      />
    </G>
  </Svg>
);
export default SvgRuUd;
