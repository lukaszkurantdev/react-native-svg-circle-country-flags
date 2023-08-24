import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="nf_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#nf_svg__a)">
      <Path
        fill="#6da544"
        d="M0 0h144.7l108.4 41.2L367.3 0H512v512H367.3l-110.2-41.4L144.7 512H0z"
      />
      <Path fill="#eee" d="M144.7 0h222.6v512H144.7z" />
      <Path
        fill="#6da544"
        d="m323 334-67-211.6L189.3 334h50.1v55.7h33.4V334z"
      />
    </G>
  </Svg>
);
export default SvgNf;
