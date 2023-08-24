import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ec_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ec_svg__a)">
      <Path fill="#d80027" d="m0 384 254.7-32.7L512 383.9V512H0z" />
      <Path fill="#0052b4" d="m0 256 255-27 257 27v128H0z" />
      <Path fill="#ffda44" d="M0 0h512v256H0z" />
      <Circle cx={256} cy={256} r={89} fill="#ffda44" />
      <Path
        fill="#338af3"
        d="M256 311.6c-30.7 0-55.7-25-55.7-55.6v-33.4a55.7 55.7 0 0 1 111.4 0V256c0 30.6-25 55.6-55.7 55.6z"
      />
      <Path
        fill="#333"
        d="M345 122.4h-66.7a22.3 22.3 0 0 0-44.6 0H167a23 23 0 0 0 23 22.3h-.8c0 12.3 10 22.3 22.3 22.3 0 12.3 10 22.2 22.2 22.2h44.6c12.3 0 22.2-10 22.2-22.2 12.3 0 22.3-10 22.3-22.3h-.8a23 23 0 0 0 23-22.3z"
      />
    </G>
  </Svg>
);
export default SvgEc;
