import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMr = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="mr_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#mr_svg__a)">
      <Path fill="#ff9811" d="M0 0h512L384 320 0 256Z" />
      <Path fill="#eee" d="M512 0 320 256H0v256h512V256Z" />
      <Path fill="#d80027" d="M112 148v-40l28-28h40l28 28v40l-28 28h-40z" />
    </G>
  </Svg>
);
export default SvgMr;
