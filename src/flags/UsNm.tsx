import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgUsNm = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="us-nm_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#us-nm_svg__a)">
      <Path fill="#ffda44" d="M0 0h512v512H0Z" />
      <Path
        fill="#d80027"
        d="M256 56c-7 0-12 5-12 12v128h-24v-92a12 12 0 0 0-24 0v92h-92a12 12 0 0 0 0 24h92v24H68a12 12 0 0 0 0 24h128v24h-92a12 12 0 0 0 0 24h92v92c0 7 5 12 12 12s12-5 12-12v-92h24v128c0 7 5 12 12 12s12-5 12-12V316h24v92c0 7 5 12 12 12s12-5 12-12v-92h92c7 0 12-5 12-12s-5-12-12-12h-92v-24h128c7 0 12-5 12-12s-5-12-12-12H316v-24h92c7 0 12-5 12-12s-5-12-12-12h-92v-92a12 12 0 0 0-24 0v92h-24V68c0-7-5-12-12-12z"
      />
      <Circle cx={256} cy={256} r={88} fill="#d80027" />
      <Circle cx={256} cy={256} r={64} fill="#ffda44" />
    </G>
  </Svg>
);
export default SvgUsNm;
