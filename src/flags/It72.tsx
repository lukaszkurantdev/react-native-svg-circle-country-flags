import * as React from 'react';
import Svg, { Defs, Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIt72 = (props: SvgProps) => (
  <Svg width={24} height={24} data-name="Layer 1" {...props}>
    <Defs>
      <Mask
        id="it-72_svg__a"
        width={512}
        height={512}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Circle cx={256} cy={256} r={256} fill="#fff" />
      </Mask>
    </Defs>
    <G mask="url(#it-72_svg__a)">
      <Path fill="#0052b4" d="M0 0h512v512H0V0Z" />
      <Path
        fill="#eee"
        d="m176 152-32 32v109c0 85.6 112 111.4 112 111.4s40.6-9.3 73-35.5l29.2-34.7A88.6 88.6 0 0 0 368 293V152H176Z"
      />
      <Path
        fill="#d80027"
        d="M358.2 334.2 176 152h-32v32l185 185a110 110 0 0 0 29.2-34.8Z"
      />
    </G>
  </Svg>
);
export default SvgIt72;
