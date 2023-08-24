import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="sc_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#sc_svg__a)">
      <Path fill="#0052b4" d="M0 0v332l150.9-138.5L225.2 0z" />
      <Path fill="#ffda44" d="M273.1 253.3 512 0H225.2L0 332v80.2z" />
      <Path fill="#d80027" d="M512 0 0 412.2v50.4L277.9 390 512 256z" />
      <Path fill="#eee" d="M0 462.6 512 256v133.5l-223.9 78.8L0 488.4z" />
      <Path fill="#6da544" d="m512 389.5-512 99V512h512z" />
    </G>
  </Svg>
);
export default SvgSc;
