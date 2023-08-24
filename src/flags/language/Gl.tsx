import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGl = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="gl_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#gl_svg__a)">
      <Path fill="#eee" d="M0 63 63 0h449v449l-63 63H0z" />
      <Path fill="#338af3" d="M0 0v63l449 449h63v-63L63 0H0z" />
      <Path
        fill="#d80027"
        d="m211 181 46 16.4 44-16.4v-38l-18 9-27-27-27 27-18-9z"
      />
      <Path fill="#0052b4" d="M186 181v103a70 70 0 0 0 140 0V181z" />
    </G>
  </Svg>
);
export default SvgGl;
