import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgOm = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="om_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#om_svg__a)">
      <Path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <Path fill="#d80027" d="M0 0h512v160H0Z" />
      <Path fill="#333" d="M0 352h512v160H0Z" />
      <Path fill="#6da544" d="M233 294c0 25-26 42-26 42h98s-26-17-26-42z" />
      <Path
        fill="#496e2d"
        d="M256 176c-9 0-17 4-23 10a32 32 0 0 0-48 24 32 32 0 0 0 2 59 32 32 0 0 0 46 25c6 6 14 10 23 10s17-4 23-10c4 3 9 4 14 4 17 0 31-13 32-29a32 32 0 0 0 2-59 32 32 0 0 0-48-24c-6-6-14-10-23-10z"
      />
    </G>
  </Svg>
);
export default SvgOm;
