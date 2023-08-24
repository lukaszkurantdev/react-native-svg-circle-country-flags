import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBz = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="bz_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#bz_svg__a)">
      <Path
        fill="#0052b4"
        d="m0 44.5 257.8-23.7L512 44.5v423l-252.5 26L0 467.5z"
      />
      <Circle cx={256} cy={256} r={122.4} fill="#eee" />
      <Circle cx={256} cy={256} r={100.2} fill="#6da544" />
      <Circle cx={256} cy={256} r={66.8} fill="#eee" />
      <Path
        fill="#0052b4"
        d="M256 239.3 219.8 256v27.8l36.2 22.3 36.2-22.3V256z"
      />
      <Path fill="#ffda44" d="M219.8 222.6h72.4V256h-72.4z" />
      <Path fill="#a2001d" d="M0 0h512v44.5H0zm0 467.5h512V512H0z" />
    </G>
  </Svg>
);
export default SvgBz;
