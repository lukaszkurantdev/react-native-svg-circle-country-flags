import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBqSa = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="bq-sa_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#bq-sa_svg__a)">
      <Path fill="#d80027" d="M0 0h512v256H0z" />
      <Path fill="#0052b4" d="M0 256h512v256H0z" />
      <Path fill="#eee" d="M0 256 256 0l256 256-256 256z" />
      <Path
        fill="#ffda44"
        d="m256 133.6 27.6 85H373L300.7 271l27.6 85-72.3-52.5-72.3 52.6 27.6-85-72.3-52.6h89.4z"
      />
    </G>
  </Svg>
);
export default SvgBqSa;
