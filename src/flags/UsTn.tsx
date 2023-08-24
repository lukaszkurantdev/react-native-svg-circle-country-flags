import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgUsTn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="us-tn_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#us-tn_svg__a)">
      <Path fill="#0052b4" d="M448 0h64v512h-64l-16-256Z" />
      <Path fill="#eee" d="M416 0h32v512h-32l-16-256Z" />
      <Path fill="#d80027" d="M0 0h416v512H0z" />
      <Circle cx={208} cy={256} r={160} fill="#eee" />
      <Circle cx={208} cy={256} r={128} fill="#0052b4" />
      <Path
        fill="#eee"
        d="m145 284 60 83V265l-60 83 98-32zm15-128-22 100 76-68-102 11 89 51zm147 49-42 93-21-100 75 69-102-11z"
      />
    </G>
  </Svg>
);
export default SvgUsTn;
