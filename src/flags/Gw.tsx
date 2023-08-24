import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGw = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="gw_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#gw_svg__a)">
      <Path fill="#d80027" d="M0 0h189.2l54 257.6-54 254.4H0z" />
      <Path fill="#ffda44" d="M189.2 0H512v256l-159 53.5L189.1 256z" />
      <Path fill="#6da544" d="M189.2 256H512v256H189.2z" />
      <Path
        fill="#333"
        d="m96.7 189.2 16.6 51H167l-43.4 31.6 16.5 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6h53.7z"
      />
    </G>
  </Svg>
);
export default SvgGw;
