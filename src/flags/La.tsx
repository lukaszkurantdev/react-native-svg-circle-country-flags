import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLa = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="la_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#la_svg__a)">
      <Path
        fill="#d80027"
        d="M0 0h512v144.8l-45.8 113L512 367.4V512H0V367.4l46.3-111.1L0 144.8z"
      />
      <Path fill="#0052b4" d="M0 144.8h512v222.6H0z" />
      <Circle cx={256} cy={256.1} r={89} fill="#eee" />
    </G>
  </Svg>
);
export default SvgLa;
