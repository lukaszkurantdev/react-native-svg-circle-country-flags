import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNg = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ng_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ng_svg__a)">
      <Path
        fill="#6da544"
        d="M0 0v512h160l96-64 96 64h160V0H352l-96 64-96-64Z"
      />
      <Path fill="#eee" d="M160 0h192v512H160Z" />
    </G>
  </Svg>
);
export default SvgNg;
