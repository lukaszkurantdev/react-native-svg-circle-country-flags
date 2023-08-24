import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgUsNc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="us-nc_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#us-nc_svg__a)">
      <Path fill="#0052b4" d="M0 0h232l64 256-64 256H0Z" />
      <Path fill="#d80027" d="M232 0h280v256l-140 64-140-64Z" />
      <Path fill="#eee" d="M232 256h280v256H232Z" />
      <Path fill="#0052b4" d="M0 0h232v512H0z" />
      <Path fill="#eee" d="m91 294 65-47H76l65 47-25-76z" />
      <Path
        fill="#ffda44"
        d="M24 224h40v64H24zm144 0h40v64h-40zM64 92v16H24v32h40v-16h104v16h40v-32h-40V92H64zm0 328v-16H24v-32h40v16h104v-16h40v32h-40v16z"
      />
    </G>
  </Svg>
);
export default SvgUsNc;
