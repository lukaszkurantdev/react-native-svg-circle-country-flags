import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTransnistria = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="transnistria_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#transnistria_svg__a)">
      <Path
        fill="#a2001d"
        d="M0 0h512v189.5l-39 62 39 71.6V512H0V323l40.8-67L0 189.5z"
      />
      <Path fill="#6da544" d="M0 189.5h512v133.6H0z" />
    </G>
  </Svg>
);
export default SvgTransnistria;
