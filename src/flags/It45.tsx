import * as React from 'react';
import Svg, { Defs, Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIt45 = (props: SvgProps) => (
  <Svg width={24} height={24} data-name="Layer 1" {...props}>
    <Defs>
      <Mask
        id="it-45_svg__a"
        width={512}
        height={512}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Circle cx={256} cy={256} r={256} fill="#fff" />
      </Mask>
    </Defs>
    <G mask="url(#it-45_svg__a)">
      <Path fill="#eee" d="M0 0h512v512H0V0Z" />
      <Path
        fill="#496e2d"
        d="M136 128v240h240V128H136Zm16 224V247l203 105H152Zm208-161a166 166 0 0 1-104 0 166 166 0 0 0-104 0v-47h208v47Z"
      />
      <Path fill="#d80027" d="M136 384h240v16H136z" />
    </G>
  </Svg>
);
export default SvgIt45;
