import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgInterslavic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="interslavic_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#interslavic_svg__a)">
      <Path fill="#eee" d="m512 512-192-64-64-192 64-192L512 0Z" />
      <Path fill="#ffda44" d="m0 512 192-64 64-192-64-192L0 0Z" />
      <Path fill="#0052b4" d="m0 0 256 256L512 0Z" />
      <Path fill="#d80027" d="M512 512 256 256 0 512Z" />
    </G>
  </Svg>
);
export default SvgInterslavic;
