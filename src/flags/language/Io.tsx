import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIo = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="io_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#io_svg__a)">
      <Path fill="#338af3" d="M0 0h512v512H0z" />
      <Path
        fill="#eee"
        d="m256 49-27 158h-64l32 55L73 366l151-55 32 55 32-55 151 55-124-103 32-55h-64z"
      />
    </G>
  </Svg>
);
export default SvgIo;
