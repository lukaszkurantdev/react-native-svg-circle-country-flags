import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="mf_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#mf_svg__a)">
      <Path fill="#eee" d="M0 128V0h512v128L299 512h-86z" />
      <Circle cx={256} cy={213} r={57} fill="#ffda44" />
      <Path fill="#eee" d="M185 213h142l-71 128Z" />
      <Path fill="#d80027" d="M256 341 142 235h228z" />
      <Path fill="#0052b4" d="m0 128 213 213v171H0Zm512 0L299 341v171h213z" />
    </G>
  </Svg>
);
export default SvgMf;
