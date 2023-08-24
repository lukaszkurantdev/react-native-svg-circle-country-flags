import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCr = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="cr_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#cr_svg__a)">
      <Path
        fill="#0052b4"
        d="M0 0h512v89l-66.3 167.5L512 423v89H0v-89l69.7-167.3L0 89z"
      />
      <Path
        fill="#eee"
        d="M0 89h512v78l-39.7 91.1L512 345v78H0v-78l36.3-85.6L0 167z"
      />
      <Path fill="#d80027" d="M0 167h512v178H0z" />
    </G>
  </Svg>
);
export default SvgCr;
