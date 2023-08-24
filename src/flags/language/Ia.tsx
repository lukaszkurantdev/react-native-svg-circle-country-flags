import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIa = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ia_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ia_svg__a)">
      <Path fill="#0052b4" d="M0 0h512v256H0z" />
      <Path fill="#d80027" d="M0 256h512v256H0z" />
      <Path
        fill="#eee"
        d="m256 0 48 208 208 48-208 48-48 208-48-208L0 256l208-48Z"
      />
    </G>
  </Svg>
);
export default SvgIa;
