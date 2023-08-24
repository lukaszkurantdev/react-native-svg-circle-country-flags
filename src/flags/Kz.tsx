import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgKz = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="kz_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#kz_svg__a)">
      <Path fill="#338af3" d="M0 0h512v512H0z" />
      <Path
        fill="#ffda44"
        d="M400.7 258.8H111.3c0 20 17.4 36.2 37.4 36.2h-1.2c0 20 16.2 36.1 36.2 36.1 0 20 16.1 36.2 36.1 36.2h72.4c20 0 36.1-16.2 36.1-36.2 20 0 36.2-16.2 36.2-36.1h-1.2c20 0 37.4-16.2 37.4-36.2z"
      />
      <Path fill="#338af3" d="M356.2 211.5a100.2 100.2 0 0 1-200.4 0" />
      <Path
        fill="#ffda44"
        d="m332.5 211.5-31.3 14.7 16.7 30.3-34-6.5-4.3 34.3L256 259l-23.6 25.3L228 250l-34 6.5 16.6-30.3-31.2-14.7 31.2-14.7-16.6-30.3 34 6.5 4.3-34.3 23.6 25.2 23.6-25.2L284 173l34-6.5-16.6 30.3z"
      />
    </G>
  </Svg>
);
export default SvgKz;
