import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCl = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="cl_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#cl_svg__a)">
      <Path fill="#d80027" d="m0 256 254.5-51.3L512 256v256H0z" />
      <Path fill="#0052b4" d="M0 0h256l52.7 132.8L256 256H0z" />
      <Path
        fill="#eee"
        d="M256 0h256v256H256zM152.4 89l16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51L82.2 140h53.6z"
      />
    </G>
  </Svg>
);
export default SvgCl;
