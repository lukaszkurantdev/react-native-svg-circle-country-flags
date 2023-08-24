import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBh = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="bh_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#bh_svg__a)">
      <Path fill="#eee" d="M0 0h182.5l88.1 268.5-88 243.5H0z" />
      <Path
        fill="#d80027"
        d="m182.5 0-82.3 42.7 82.3 42.7-82.3 42.6 82.3 42.7-82.3 42.7 82.3 42.6-82.3 42.7 82.3 42.7-82.3 42.6 82.3 42.7-82.3 42.7 82.3 42.6H512V0H182.5z"
      />
    </G>
  </Svg>
);
export default SvgBh;
