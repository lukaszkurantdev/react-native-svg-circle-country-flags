import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgOto = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="oto_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#oto_svg__a)">
      <Path fill="#ff9811" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <Path fill="#eee" d="m0 160 256-32 256 32v32H0Z" />
      <Path fill="#338af3" d="M0 0h512v160H0Z" />
      <Path fill="#eee" d="m0 352 256 32 256-32v-32H0Z" />
      <Path fill="#6da544" d="M0 352h512v160H0Z" />
      <Circle cx={256} cy={256} r={160} fill="#eee" />
      <Circle cx={256} cy={256} r={128} fill="#338af3" />
      <Path
        fill="#ff9811"
        d="M207 139v68h-68l49 49-49 49h68v68l49-49 49 49v-68h68l-49-49 49-49h-68v-68l-49 49z"
      />
    </G>
  </Svg>
);
export default SvgOto;
