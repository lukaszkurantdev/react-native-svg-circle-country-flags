import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAfEmirate = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="af-emirate_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#af-emirate_svg__a)">
      <Path fill="#eee" d="M0 0h512v512H0Z" />
      <Path
        fill="#333"
        d="M131 189v78c0 12-10 22-22 22v34c30 0 55-25 55-56v-78zm50 0v45a39 39 0 0 0 39 39 39 39 0 0 0 22-7 39 39 0 0 0 22 7l5-1a22 22 0 0 1-21 17v34c30 0 55-25 55-56v-78h-33v45a6 6 0 0 1-11 0v-45h-34v45a6 6 0 0 1-11 0v-45zm139 0v78h33v-78zm50 0v78c0 12-10 22-22 22v34c31 0 56-25 56-56v-78ZM181 289v34h50v-34z"
      />
    </G>
  </Svg>
);
export default SvgAfEmirate;
