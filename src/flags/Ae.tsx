import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAe = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ae_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ae_svg__a)">
      <Path fill="#a2001d" d="M0 0h167l52.3 252L167 512H0z" />
      <Path
        fill="#eee"
        d="m167 167 170.8-44.6L512 167v178l-173.2 36.9L167 345z"
      />
      <Path fill="#6da544" d="M167 0h345v167H167z" />
      <Path fill="#333" d="M167 345h345v167H167z" />
    </G>
  </Svg>
);
export default SvgAe;
