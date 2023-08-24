import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgKanuri = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="kanuri_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#kanuri_svg__a)">
      <Path fill="#ffda44" d="m0 167 256-32 256 32v178l-256 32L0 345Z" />
      <Path fill="#496e2d" d="M0 345h512v167H0Z" />
      <Path fill="#0052b4" d="M0 0h512v167H0Z" />
      <Path fill="#ffda44" d="m373 373 36 112-94-69h117l-95 69z" />
    </G>
  </Svg>
);
export default SvgKanuri;
