import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNr = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="nr_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#nr_svg__a)">
      <Path
        fill="#0052b4"
        d="M0 0h512v233.7L494.3 257l17.7 21.3V512H0V278.3l18.7-22.9L0 233.7z"
      />
      <Path
        fill="#eee"
        d="m211.5 345-28.7 13.5 15.3 27.8-31.2-6-4 31.5-21.6-23.1-21.7 23.1-4-31.4-31.1 6 15.3-27.9L71 345l28.7-13.4-15.3-27.8 31.1 6 4-31.5 21.7 23.1 21.7-23.1 4 31.4 31-6-15.2 27.9z"
      />
      <Path fill="#ffda44" d="M0 233.7h512v44.6H0z" />
    </G>
  </Svg>
);
export default SvgNr;
