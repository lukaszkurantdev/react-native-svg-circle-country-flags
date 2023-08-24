import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAa = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="aa_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#aa_svg__a)">
      <Path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <Path fill="#0052b4" d="M0 0h512v160H0Z" />
      <Path fill="#496e2d" d="M0 352h512v160H0Z" />
      <Path fill="#d80027" d="M0 0v512l256-256L0 0z" />
      <Path
        fill="#ff9811"
        d="m345 229-12 11 40 40-40 40 11 11 40-40 40 40 11-11-40-40 40-40-11-11-40 40z"
      />
      <Path fill="#d80027" d="m384 181 21 62-54-38h66l-53 39z" />
    </G>
  </Svg>
);
export default SvgAa;
