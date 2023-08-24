import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPy = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="py_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#py_svg__a)">
      <Path
        fill="#eee"
        d="m0 144.7 255.3-36.5L512 144.7v222.6L250.5 407 0 367.3z"
      />
      <Path fill="#d80027" d="M0 0h512v144.7H0z" />
      <Path fill="#0052b4" d="M0 367.3h512V512H0z" />
      <Path
        fill="#6da544"
        d="m319 182-23.6 23.5a55.5 55.5 0 0 1-39.4 95 55.7 55.7 0 0 1-39.3-95L193 182a89 89 0 1 0 126 0z"
      />
      <Path
        fill="#ffda44"
        d="m256 211.5 8.3 25.5H291l-21.7 15.8 8.3 25.5-21.7-15.8-21.7 15.8 8.3-25.5-21.7-15.8h26.8z"
      />
    </G>
  </Svg>
);
export default SvgPy;
