import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="gt_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#gt_svg__a)">
      <Path
        fill="#338af3"
        d="M0 0h144.7l108.4 41.2L367.3 0H512v512H367.3l-110.2-41.4L144.7 512H0z"
      />
      <Path fill="#eee" d="M144.7 0h222.6v512H144.7z" />
      <Path
        fill="#acabb1"
        d="M322.9 299.3 279.6 256l41.2-41.2L319 193l-11.7-11.8-51.2 51.2-51.2-51.2-11.7 11.8-2 21.8 41.3 41.2-43.3 43.3 23.6 23.6 43.3-43.3 43.3 43.3z"
      />
      <Path
        fill="#6da544"
        d="m319 193-23.6 23.6a55.5 55.5 0 0 1-39.4 95 55.7 55.7 0 0 1-39.4-95L193 193a89 89 0 1 0 126 0z"
      />
    </G>
  </Svg>
);
export default SvgGt;
