import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLb = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="lb_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#lb_svg__a)">
      <Path
        fill="#d80027"
        d="M0 0h512v144.8l-45.8 113L512 367.4V512H0V367.4l46.3-111.1L0 144.8z"
      />
      <Path fill="#eee" d="M0 144.8h512v222.6H0z" />
      <Path
        fill="#6da544"
        d="M322.8 300.5 256 178.1l-66.8 122.4h50.1V334h33.4v-33.4z"
      />
    </G>
  </Svg>
);
export default SvgLb;
