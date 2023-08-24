import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="et_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#et_svg__a)">
      <Path
        fill="#333"
        d="m0 167 254.6-36.6L512 166.9v178l-254.6 36.4L0 344.9z"
      />
      <Path fill="#0052b4" d="M0 0h512v166.9H0z" />
      <Path fill="#eee" d="M0 344.9h512V512H0z" />
    </G>
  </Svg>
);
export default SvgEt;
