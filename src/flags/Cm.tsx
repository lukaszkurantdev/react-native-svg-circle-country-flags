import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCm = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="cm_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#cm_svg__a)">
      <Path fill="#d80027" d="M144.8 0h222.4l32 260-32 252H144.8l-32.1-256z" />
      <Path
        fill="#ffda44"
        d="m256.1 167 22.1 68h71.5L292 277l22 68-57.8-42-57.9 42 22.1-68-57.8-42H234z"
      />
      <Path fill="#496e2d" d="M0 0h144.8v512H0z" />
      <Path fill="#ffda44" d="M367.2 0H512v512H367.2z" />
    </G>
  </Svg>
);
export default SvgCm;
