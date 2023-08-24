import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="mt_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#mt_svg__a)">
      <Path fill="#eee" d="M0 0h256l52 259.2L256 512H0z" />
      <Path fill="#d80027" d="M256 0h256v512H256z" />
      <Path
        fill="#acabb1"
        d="M178 100.2V66.8h-33.3v33.4h-33.4v33.4h33.4V167h33.4v-33.4h33.4v-33.4z"
      />
    </G>
  </Svg>
);
export default SvgMt;
