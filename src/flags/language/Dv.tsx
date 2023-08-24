import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgDv = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="dv_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#dv_svg__a)">
      <Path fill="#d80027" d="M0 0h512v512H0z" />
      <Path fill="#6da544" d="M89 133.6h334v244.8H89z" />
      <Path
        fill="#eee"
        d="M297.2 328.3a72.3 72.3 0 1 1 34.4-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.4 8.7z"
      />
    </G>
  </Svg>
);
export default SvgDv;
