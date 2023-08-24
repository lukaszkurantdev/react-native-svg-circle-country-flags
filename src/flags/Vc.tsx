import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgVc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="vc_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#vc_svg__a)">
      <Path
        fill="#ffda44"
        d="M378.5 0H133.7l-22.3 256 22.3 256h244.8l22.3-256z"
      />
      <Path fill="#338af3" d="M133.7 512V0H0v512z" />
      <Path
        fill="#6da544"
        d="M512 0H378.5v512H512zM200.4 322.8 156 256l44.5-66.8 44.7 66.8zm111.4 0L267.1 256l44.6-66.8 44.5 66.8zm-55.7 89L211.6 345l44.5-66.7 44.5 66.7z"
      />
    </G>
  </Svg>
);
export default SvgVc;
