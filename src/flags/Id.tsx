import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgId = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="id_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#id_svg__a)">
      <Path fill="#eee" d="m0 256 249.6-41.3L512 256v256H0z" />
      <Path fill="#a2001d" d="M0 0h512v256H0z" />
    </G>
  </Svg>
);
export default SvgId;
