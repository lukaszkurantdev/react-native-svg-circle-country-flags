import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBo = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="bo_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#bo_svg__a)">
      <Path
        fill="#ffda44"
        d="m0 167 252.9-29.3L512 167v178l-255.7 25.7L0 345z"
      />
      <Path fill="#d80027" d="M0 0h512v167H0z" />
      <Path fill="#6da544" d="M0 345h512v167H0z" />
    </G>
  </Svg>
);
export default SvgBo;
