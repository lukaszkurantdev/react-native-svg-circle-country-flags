import * as React from 'react';
import Svg, { Defs, Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIt23 = (props: SvgProps) => (
  <Svg width={24} height={24} data-name="Layer 1" {...props}>
    <Defs>
      <Mask
        id="it-23_svg__a"
        width={512}
        height={512}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Circle cx={256} cy={256} r={256} fill="#fff" />
      </Mask>
    </Defs>
    <G mask="url(#it-23_svg__a)">
      <Path fill="#333" d="M0 0h256l64 256-64 256H0V0Z" />
      <Path fill="#d80027" d="M256 0h256v512H256V0Z" />
    </G>
  </Svg>
);
export default SvgIt23;
