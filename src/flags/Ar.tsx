import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAr = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ar_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ar_svg__a)">
      <Path
        fill="#338af3"
        d="M0 0h512v144.7L488 256l24 111.3V512H0V367.3L26 256 0 144.7z"
      />
      <Path fill="#eee" d="M0 144.7h512v222.6H0z" />
      <Path
        fill="#ffda44"
        d="m332.4 256-31.2 14.7 16.7 30.3-34-6.5-4.2 34.3-23.7-25.2-23.6 25.2-4.3-34.3-34 6.5 16.6-30.3-31.2-14.7 31.3-14.7L194 211l34 6.5 4.3-34.3 23.6 25.2 23.6-25.2 4.4 34.3 34-6.5-16.7 30.3z"
      />
    </G>
  </Svg>
);
export default SvgAr;
