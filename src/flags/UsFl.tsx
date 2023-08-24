import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgUsFl = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="us-fl_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#us-fl_svg__a)">
      <Path fill="#eee" d="M0 68 68 0h376l68 68v376l-68 68H68L0 444Z" />
      <Path
        fill="#d80027"
        d="M0 0v68l188 188L0 444v68h68l188-188 188 188h68v-68L324 256 512 68V0h-68L256 188 68 0Z"
      />
      <Circle cx={256} cy={256} r={96} fill="#ff9811" />
      <Circle cx={256} cy={256} r={64} fill="#6da544" />
    </G>
  </Svg>
);
export default SvgUsFl;
