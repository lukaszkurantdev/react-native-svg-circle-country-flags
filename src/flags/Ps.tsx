import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPs = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ps_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ps_svg__a)">
      <Path fill="#eee" d="M41.3 121.9 512 167v178L43.8 391.3z" />
      <Path fill="#333" d="M0 0h512v167H111z" />
      <Path fill="#6da544" d="M111 345h401v167H0z" />
      <Path fill="#d80027" d="M0 0v512l256-256z" />
    </G>
  </Svg>
);
export default SvgPs;
