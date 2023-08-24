import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMrj = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="mrj_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#mrj_svg__a)">
      <Path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z" />
      <Path fill="#eee" d="M512 0v170H0V0Z" />
      <Path fill="#d80027" d="M512 342v170H0V342Z" />
    </G>
  </Svg>
);
export default SvgMrj;
