import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgRe = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="re_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#re_svg__a)">
      <Path
        fill="#0052b4"
        d="M64 0 0 64v160l32 32-32 32v224l256-32 256 32V288l-32-32 32-32V64L448 0H288l-32 32-32-32H64z"
      />
      <Path fill="#d80027" d="M256 256 0 512h512z" />
      <Path fill="#ffda44" d="M0 224v64l512-64v64z" />
      <Path
        fill="#ffda44"
        d="M256 256 0 64V0h64zm0 0L448 0h64v64zm0 0L224 0h64z"
      />
    </G>
  </Svg>
);
export default SvgRe;
