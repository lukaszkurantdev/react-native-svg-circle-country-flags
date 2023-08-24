import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPr = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="pr_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#pr_svg__a)">
      <Path
        fill="#eee"
        d="m27 63.3 485 39.1v102.4L477.3 259l34.7 48.2v102.4L27.4 446.9z"
      />
      <Path
        fill="#d80027"
        d="m0 0 51.2 102.4H512V0zm0 512h512V409.6H51.2zm180-204.8h332V204.8H180z"
      />
      <Path fill="#0052b4" d="M0 0v512l256-256z" />
      <Path
        fill="#eee"
        d="m103.6 189.2 16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6H87z"
      />
    </G>
  </Svg>
);
export default SvgPr;
