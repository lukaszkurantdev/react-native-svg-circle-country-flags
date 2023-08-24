import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgDk = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="dk_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#dk_svg__a)">
      <Path
        fill="#d80027"
        d="M0 0h133.6l32.7 20.3 34-20.3H512v222.6L491.4 256l20.6 33.4V512H200.3l-31.7-20.4-35 20.4H0V289.4l29.4-33L0 222.7z"
      />
      <Path
        fill="#eee"
        d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0h-66.7z"
      />
    </G>
  </Svg>
);
export default SvgDk;
