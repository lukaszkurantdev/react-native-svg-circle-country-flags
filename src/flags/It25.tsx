import * as React from 'react';
import Svg, { Defs, Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIt25 = (props: SvgProps) => (
  <Svg width={24} height={24} data-name="Layer 1" {...props}>
    <Defs>
      <Mask
        id="it-25_svg__a"
        width={512}
        height={512}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Circle cx={256} cy={256} r={256} fill="#fff" />
      </Mask>
    </Defs>
    <G mask="url(#it-25_svg__a)">
      <Path fill="#6da544" d="M0 0h512v512H0V0Z" />
      <Path
        fill="#eee"
        d="M253.9 161.3a62.7 62.7 0 1 1 71.5 30.3 33.7 33.7 0 1 0 25.3 62.3 62.7 62.7 0 1 1-30.3 71.5 33.7 33.7 0 1 0-62.3 25.3 62.7 62.7 0 1 1-71.5-30.3 33.7 33.7 0 1 0-25.3-62.3 62.7 62.7 0 1 1 30.3-71.5 33.7 33.7 0 1 0 62.3-25.3Z"
      />
    </G>
  </Svg>
);
export default SvgIt25;
