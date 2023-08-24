import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="at_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#at_svg__a)">
      <Path
        fill="#d80027"
        d="M0 0h512v167l-23.2 89.7L512 345v167H0V345l29.4-89L0 167z"
      />
      <Path fill="#eee" d="M0 167h512v178H0z" />
    </G>
  </Svg>
);
export default SvgAt;
