import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgJe = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="je_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#je_svg__a)">
      <Path
        fill="#eee"
        d="M0 47.1 47 0h417.8L512 47.2v417.7L464.9 512H47L0 464.9z"
      />
      <Path
        fill="#d80027"
        d="M0 0v47.1L208.8 256 0 464.9V512h47.1L256 303.2 464.9 512H512v-47L303.1 256 512 47.2V0h-47.2L256 208.9 47 0z"
      />
      <Path
        fill="#ffda44"
        d="M211.5 78 256 89l44.5-11V40l-17.8 9L256 22.3 229.3 49l-17.8-9z"
      />
      <Path
        fill="#d80027"
        d="M211.5 78v27.7c0 34.1 44.5 44.6 44.5 44.6s44.5-10.5 44.5-44.6V78z"
      />
    </G>
  </Svg>
);
export default SvgJe;
