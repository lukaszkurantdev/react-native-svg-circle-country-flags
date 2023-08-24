import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgFi = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="fi_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#fi_svg__a)">
      <Path
        fill="#eee"
        d="M0 0h133.6l35.3 16.7L200.3 0H512v222.6l-22.6 31.7 22.6 35.1V512H200.3l-32-19.8-34.7 19.8H0V289.4l22.1-33.3L0 222.6z"
      />
      <Path
        fill="#0052b4"
        d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0h-66.7z"
      />
    </G>
  </Svg>
);
export default SvgFi;