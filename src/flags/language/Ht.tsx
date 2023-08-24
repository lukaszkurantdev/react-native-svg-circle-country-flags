import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgHt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ht_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ht_svg__a)">
      <Path fill="#a2001d" d="m0 256 254.8-41.8L512 256v256H0z" />
      <Path fill="#0052b4" d="M0 0h512v256H0z" />
      <Path fill="#eee" d="m345 322.8-89-11.1-89 11V189.3h178z" />
      <Circle cx={256} cy={267.1} r={44.5} fill="#0052b4" />
      <Circle cx={256} cy={267.1} r={22.3} fill="#a2001d" />
      <Path fill="#6da544" d="M222.6 211.5h66.8L256 244.9z" />
      <Path fill="#ffda44" d="M244.9 233.7H267v66.8h-22z" />
      <Path fill="#6da544" d="M291.6 293.8h-71.2l-53.4 29h178z" />
    </G>
  </Svg>
);
export default SvgHt;
