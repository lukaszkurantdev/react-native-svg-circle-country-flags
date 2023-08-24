import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCh = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ch_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ch_svg__a)">
      <Path fill="#d80027" d="M0 0h512v512H0z" />
      <Path
        fill="#eee"
        d="M389.6 211.5h-89v-89h-89.1v89h-89v89h89v89h89v-89h89z"
      />
    </G>
  </Svg>
);
export default SvgCh;
