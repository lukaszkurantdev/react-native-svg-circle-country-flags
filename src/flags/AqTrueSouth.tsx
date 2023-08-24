import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAqTrueSouth = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="aq-true_south_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#aq-true_south_svg__a)">
      <Path fill="#eee" d="M0 256 256 28l256 228v256H0Z" />
      <Path
        fill="#0052b4"
        d="m114 256 142 228 142-228-142 57ZM0 0h512v256H398L256 28 114 256H0Z"
      />
    </G>
  </Svg>
);
export default SvgAqTrueSouth;
