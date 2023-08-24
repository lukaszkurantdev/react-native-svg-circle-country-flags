import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="an_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#an_svg__a)">
      <Path
        fill="#eee"
        d="M0 0h171l85 32 85-32h171v171l-32 85 32 85v171H341l-85-32-85 32H0V341l32-85-32-85Z"
      />
      <Path fill="#d80027" d="M171 0h170v512H171z" />
      <Path fill="#0052b4" d="M512 171v170H0V171z" />
      <Path
        fill="#eee"
        d="m236 247 52-37h-64l52 37-20-61zm-45 79 52-37h-64l52 37-20-61zm90 0 52-37h-64l52 37-20-61zm74-47 52-37h-64l52 37-20-61zm-238 0 52-37h-64l52 37-20-61z"
      />
    </G>
  </Svg>
);
export default SvgAn;
