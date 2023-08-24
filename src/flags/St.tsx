import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="st_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#st_svg__a)">
      <Path
        fill="#6da544"
        d="M0 0h512v167l-52.6 83.8L512 345v167H0l72-264.3z"
      />
      <Path fill="#ffda44" d="M114.9 166.9H512v178H114.9z" />
      <Path fill="#d80027" d="M0 0v512l256-256z" />
      <Path
        fill="#333"
        d="m325 211.5 11.1 34H372l-29 21 11.1 34-29-21-28.9 21 11-34-28.8-21H314zm111.4 0 11 34h35.8l-29 21 11.1 34-29-21-28.9 21 11.1-34-29-21h35.8z"
      />
    </G>
  </Svg>
);
export default SvgSt;
