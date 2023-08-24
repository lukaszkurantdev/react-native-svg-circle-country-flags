import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTi = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ti_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ti_svg__a)">
      <Path fill="#d80027" d="M0 0h512v512H0l64-256Z" />
      <Path
        fill="#ffda44"
        d="M0 0v512l256-256Zm404 168v176L300 202l168 54-168 54Z"
      />
    </G>
  </Svg>
);
export default SvgTi;
