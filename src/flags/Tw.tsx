import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTw = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="tw_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#tw_svg__a)">
      <Path fill="#d80027" d="M0 256 256 0h256v512H0z" />
      <Path fill="#0052b4" d="M256 256V0H0v256z" />
      <Path
        fill="#eee"
        d="m222.6 149.8-31.3 14.7 16.7 30.3-34-6.5-4.3 34.3-23.6-25.2-23.7 25.2-4.3-34.3-34 6.5 16.7-30.3-31.2-14.7 31.2-14.7-16.6-30.3 34 6.5 4.2-34.3 23.7 25.3L169.7 77l4.3 34.3 34-6.5-16.7 30.3z"
      />
      <Circle cx={146.1} cy={149.8} r={47.7} fill="#0052b4" />
      <Circle cx={146.1} cy={149.8} r={41.5} fill="#eee" />
    </G>
  </Svg>
);
export default SvgTw;
