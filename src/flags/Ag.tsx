import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAg = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ag_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ag_svg__a)">
      <Path fill="#333" d="M0 .4h512l-34 229H36z" />
      <Path
        fill="#ffda44"
        d="m367.3 205.3-109.7 19.4-112.9-19.4 45.5-21.3-24.2-44 49.3 9.4 6.3-49.9 34.4 36.7 34.4-36.6 6.3 50L346 140l-24.2 44z"
      />
      <Path fill="#0052b4" d="M25.6 205.3h466.8L257 439.5z" />
      <Path fill="#eee" d="M34 307.4h446L256 511.6z" />
      <Path fill="#a2001d" d="m0 511.6 256 .4L0 .4zm256 .4 256-.4V0z" />
    </G>
  </Svg>
);
export default SvgAg;
