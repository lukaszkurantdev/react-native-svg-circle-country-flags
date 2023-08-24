import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgJo = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="jo_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#jo_svg__a)">
      <Path
        fill="#eee"
        d="m126 158 127.8-10.3L512 167v178l-254.9 32.3L126 335.9z"
      />
      <Path fill="#333" d="M0 0h512v167H107z" />
      <Path fill="#6da544" d="M107 345h405v167H0z" />
      <Path fill="#d80027" d="M0 0v512l256-256z" />
      <Path
        fill="#eee"
        d="m101.6 200.3 14 29.4 31.8-7.3-14.2 29.3 25.5 20.2-31.8 7.2.1 32.6-25.4-20.4-25.4 20.4V279l-31.7-7.2 25.5-20-14.2-29.4 31.8 7.3z"
      />
    </G>
  </Svg>
);
export default SvgJo;
