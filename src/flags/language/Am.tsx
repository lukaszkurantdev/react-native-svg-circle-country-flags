import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAm = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="am_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#am_svg__a)">
      <Path fill="#d80027" d="m0 345 255.7-31L512 345v167H0z" />
      <Path fill="#ffda44" d="m0 167 258-40.7L512 167v178H0z" />
      <Path fill="#6da544" d="M0 0h512v167H0z" />
      <Circle cx={256} cy={256} r={122.4} fill="#0052b4" />
      <G fill="#ffda44">
        <Path d="m256 161.2 22 68h71.7l-58 42 22.3 68.3-58-42.3-58 42.2 22.2-68.1-58-42H234z" />
        <Path d="m344.1 273-70-22.9 43.2-59.6-18-13L256 237l-43.3-59.7-18 13.1 43.3 59.7-70.1 22.7 6.9 21.2 70-22.8V345h22.3v-73.7l70.1 22.8z" />
      </G>
    </G>
  </Svg>
);
export default SvgAm;
