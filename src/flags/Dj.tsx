import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgDj = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="dj_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#dj_svg__a)">
      <Path fill="#338af3" d="M0 0h512v256l-153.2 35.7L210 256z" />
      <Path fill="#6da544" d="M210 256h302v256H0z" />
      <Path fill="#eee" d="M0 0v512l256-256z" />
      <Path
        fill="#d80027"
        d="m103.6 189.2 16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6H87z"
      />
    </G>
  </Svg>
);
export default SvgDj;
