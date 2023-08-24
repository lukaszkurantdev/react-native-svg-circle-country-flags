import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgQa = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="qa_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#qa_svg__a)">
      <Path fill="#eee" d="M0 0h173l61 255.8L173.4 512H0z" />
      <Path
        fill="#751a46"
        d="m173 0-72.7 30.8L176 63l-75.7 32.2 75.7 32.1-75.7 32.2 75.7 32.1-75.7 32.1 75.7 32.2-75.7 32.2 75.7 32.1-75.7 32.2 75.7 32.1-75.7 32.2 75.7 32.1-75.7 32.2 73.1 31H512V0z"
      />
    </G>
  </Svg>
);
export default SvgQa;
