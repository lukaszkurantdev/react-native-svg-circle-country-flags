import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPt30 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="pt-30_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#pt-30_svg__a)">
      <Path
        fill="#0052b4"
        d="M0 0h144.7l108.4 41.2L367.3 0H512v512H367.3l-110.2-41.4L144.7 512H0z"
      />
      <Path fill="#ffda44" d="M144.7 0h222.6v512H144.7z" />
      <Path
        fill="#d80027"
        d="m328.4 278.3 16.7 22.2v-89l-16.7 22.2h-50v-50l22.2-16.7h-89l22.2 16.7v50h-50l-16.7-22.2v89l16.7-22.2h50v50L211.6 345h89l-22.2-16.7v-50z"
      />
      <Path
        fill="#eee"
        d="M323 244.9h-56v-55.7h-22V245h-55.7v22H245v55.7h22V267h55.7z"
      />
    </G>
  </Svg>
);
export default SvgPt30;
