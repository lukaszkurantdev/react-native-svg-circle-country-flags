import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEg = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="eg_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#eg_svg__a)">
      <Path fill="#eee" d="m0 144 256-32 256 32v224l-256 32L0 368Z" />
      <Path fill="#d80027" d="M0 0h512v144H0Z" />
      <Path fill="#333" d="M0 368h512v144H0Z" />
      <Path
        fill="#ff9811"
        d="M250 191c-8 0-17 4-22 14 5-3 16-1 16 13 0 4-2 8-5 10-8 0-14-14-29-14-10 0-19 7-19 17v69l46-7-14 27h66l-14-27 46 7v-69c0-10-9-17-19-17-15 0-21 14-29 14 8-23-7-37-23-37z"
      />
    </G>
  </Svg>
);
export default SvgEg;
