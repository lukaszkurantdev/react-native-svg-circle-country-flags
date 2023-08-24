import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEo = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="eo_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#eo_svg__a)">
      <Path fill="#6da544" d="M0 256 256 0h256v512H0z" />
      <Path fill="#eee" d="M0 0h256v256H0z" />
      <Path
        fill="#6da544"
        d="m152.4 89 16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51L82.2 140h53.6z"
      />
    </G>
  </Svg>
);
export default SvgEo;
