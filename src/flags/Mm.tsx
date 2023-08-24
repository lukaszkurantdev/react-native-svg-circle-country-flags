import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMm = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="mm_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#mm_svg__a)">
      <Path
        fill="#6da544"
        d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
      />
      <Path fill="#ffda44" d="M0 0h512v167H0z" />
      <Path fill="#d80027" d="M0 345h512v167H0z" />
      <Path
        fill="#eee"
        d="M431.5 216.5h-134L256 89l-41.4 127.6h-134l108.3 78.8L147.5 423 256 345l108.5 78-41.4-127.6z"
      />
    </G>
  </Svg>
);
export default SvgMm;
