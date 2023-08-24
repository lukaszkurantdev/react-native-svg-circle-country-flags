import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTo = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="to_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#to_svg__a)">
      <Path fill="#d80027" d="M0 256 256 0h256v512H0z" />
      <Path fill="#eee" d="M0 0h256v256H0z" />
      <Path
        fill="#d80027"
        d="M167 133.6v-33.4h-33.4v33.4h-33.4V167h33.4v33.3H167V167h33.3v-33.4z"
      />
    </G>
  </Svg>
);
export default SvgTo;
