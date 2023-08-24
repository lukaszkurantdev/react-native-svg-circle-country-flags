import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNy = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ny_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ny_svg__a)">
      <Path
        fill="#d80027"
        d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
      />
      <Path fill="#333" d="M0 0h512v167H0z" />
      <Path fill="#496e2d" d="M0 345h512v167H0z" />
      <Path
        fill="#d80027"
        d="m332.5 122.4-31.2-14.7 16.6-30.3-34 6.5-4.3-34.3L256 75l-23.6-25.3L228 84l-34-6.5 16.7 30.3-31.3 14.7z"
      />
    </G>
  </Svg>
);
export default SvgNy;
