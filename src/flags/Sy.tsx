import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSy = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="sy_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#sy_svg__a)">
      <Path fill="#eee" d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z" />
      <Path fill="#d80027" d="M0 0h512v167H0z" />
      <Path fill="#333" d="M0 345h512v167H0z" />
      <Path
        fill="#6da544"
        d="m153 194.8 13.8 42.5h44.7l-36.2 26.3 13.8 42.5-36.1-26.3-36.2 26.3 13.8-42.5-36.2-26.3h44.7zm206 0 13.9 42.5h44.7l-36.2 26.3 13.8 42.5-36.2-26.3-36.1 26.3 13.8-42.5-36.2-26.3h44.7z"
      />
    </G>
  </Svg>
);
export default SvgSy;
