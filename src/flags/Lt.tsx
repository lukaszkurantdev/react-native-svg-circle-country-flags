import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="lt_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#lt_svg__a)">
      <Path
        fill="#6da544"
        d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
      />
      <Path fill="#ffda44" d="M0 0h512v167H0z" />
      <Path fill="#d80027" d="M0 345h512v167H0z" />
    </G>
  </Svg>
);
export default SvgLt;
