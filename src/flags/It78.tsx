import * as React from 'react';
import Svg, { Defs, Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIt78 = (props: SvgProps) => (
  <Svg width={24} height={24} data-name="Layer 1" {...props}>
    <Defs>
      <Mask
        id="it-78_svg__a"
        width={512}
        height={512}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Circle cx={256} cy={256} r={256} fill="#fff" />
      </Mask>
    </Defs>
    <G mask="url(#it-78_svg__a)">
      <Path fill="#0052b4" d="M0 0h512v512H0V0Z" />
      <Circle cx={256} cy={256} r={160} fill="#eee" />
      <Path
        fill="#ffda44"
        d="M357.8 357.8a144 144 0 0 1-203.6 0L256 256l101.8 101.8ZM154.2 154.2a144 144 0 0 1 203.6 0L256 256 154.2 154.2Z"
      />
      <Path
        fill="#333"
        d="M376 248h-24v-24h-16v24h-24v16h24v24h16v-24h24v-16zm-208 8 8-32h-16l8 32zm0 0 32 8v-16l-32 8zm0 0-8 32h16l-8-32zm0 0-32-8v16l32-8z"
      />
      <Path fill="#6da544" d="M248 192h16v24h-16z" />
      <Path fill="#496e2d" d="m256 120-32 80h64l-32-80z" />
      <Path
        fill="#338af3"
        d="m280 384-48-16v-24h48v40zm-48-48a16 16 0 0 1-16-16h80a16 16 0 0 1-16 16"
      />
    </G>
  </Svg>
);
export default SvgIt78;
