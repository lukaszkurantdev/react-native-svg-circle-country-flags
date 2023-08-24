import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMq = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="mq_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#mq_svg__a)">
      <Path fill="#6da544" d="M0 0h512v256l-256 44Z" />
      <Path fill="#333" d="M210 256h302v256H0z" />
      <Path fill="#d80027" d="M0 0v512l256-256L0 0z" />
    </G>
  </Svg>
);
export default SvgMq;
