import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSv = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="sv_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#sv_svg__a)">
      <Path
        fill="#0052b4"
        d="M0 0h512v144.7l-40.5 112.6 40.5 110V512H0V367.3l42.2-114L0 144.7z"
      />
      <Path fill="#eee" d="M0 144.7h512v222.6H0z" />
      <Path fill="#ffda44" d="m204.6 267.1 51.4-89 51.4 89z" />
      <Path fill="#6da544" d="M322.8 296.5 256 330l-66.8-33.4V252h133.6z" />
      <Path
        fill="#ffda44"
        d="m319 182-23.6 23.5a55.5 55.5 0 0 1-39.4 95 55.7 55.7 0 0 1-39.3-95L193 182a89 89 0 1 0 126 0z"
      />
    </G>
  </Svg>
);
export default SvgSv;
