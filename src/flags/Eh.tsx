import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEh = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="eh_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#eh_svg__a)">
      <Path
        fill="#eee"
        d="m90.1 144.8 210.5-27.7L512 144.8v222.6l-209 32.4-213-32.4z"
      />
      <Path fill="#333" d="M0 0h512v144.8H28.2z" />
      <Path fill="#496e2d" d="M39.5 367.4H512V512H0z" />
      <Path
        fill="#d80027"
        d="M0 .1V512h.1L256 256.1 0 .1zm365.1 178.1a78 78 0 1 0 18.9 154 78 78 0 0 1 0-152.2 78.2 78.2 0 0 0-18.9-1.8z"
      />
      <Path
        fill="#d80027"
        d="m387.3 206.1 11 34h35.8l-29 21 11.1 34-29-21-28.9 21 11.1-34-29-21h35.8z"
      />
    </G>
  </Svg>
);
export default SvgEh;
