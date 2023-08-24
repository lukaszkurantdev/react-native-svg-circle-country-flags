import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="st_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#st_svg__a)">
      <Path
        fill="#eee"
        d="m0 144.7 255.3-36.5L512 144.7v222.6L250.5 407 0 367.3z"
      />
      <Path fill="#0052b4" d="M0 0h512v144.7H0z" />
      <Path fill="#6da544" d="M0 367.3h512V512H0z" />
      <Path
        fill="#333"
        d="M272.7 250.4v-61.2h-33.4v61.2L199 290.8a66.7 66.7 0 0 0 114 0z"
      />
    </G>
  </Svg>
);
export default SvgSt;
