import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCw = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="cw_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#cw_svg__a)">
      <Path
        fill="#0052b4"
        d="M0 0h512v342.3l-22 34.2 22 32.5v103H0V409l25.4-31L0 342.2z"
      />
      <Path
        fill="#eee"
        d="m175.2 164.2 13.8 42.5h44.7L197.6 233l13.8 42.5-36.2-26.3-36.1 26.3 13.8-42.5-36.2-26.3h44.7zm-76.7-44.5 8.2 25.5h26.9L111.9 161l8.3 25.5-21.7-15.7-21.7 15.7L85 161l-21.7-15.7h26.9z"
      />
      <Path fill="#ffda44" d="M0 342.3h512V409H0z" />
    </G>
  </Svg>
);
export default SvgCw;
