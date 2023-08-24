import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgFm = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="fm_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#fm_svg__a)">
      <Path fill="#338af3" d="M0 0h512v512H0z" />
      <Path
        fill="#eee"
        d="m256 111.3 11 34h35.8l-29 21 11.1 34-28.9-21-29 21 11.1-34-29-21H245zM111.3 256l34-11v-35.8l21 29 34-11.1-21 28.9 21 29-34-11.1-21 29V267zM256 400.7l-11-34h-35.8l29-21-11.1-34 28.9 21 29-21-11.1 34 29 21H267zM400.7 256l-34 11v35.8l-21-29-34 11.1 21-28.9-21-29 34 11.1 21-29V245z"
      />
    </G>
  </Svg>
);
export default SvgFm;
