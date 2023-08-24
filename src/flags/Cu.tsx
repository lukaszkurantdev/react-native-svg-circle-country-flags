import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCu = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="cu_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#cu_svg__a)">
      <Path
        fill="#0052b4"
        d="M0 0h512v102.4L483.8 151l28.2 53.8v102.4l-30.5 50.7 30.5 51.7V512H0l39.8-257z"
      />
      <Path fill="#ff9811" d="M0 44.5v423V256z" />
      <Path
        fill="#eee"
        d="M27.2 102.4v102.4H512V102.4H27.2zm0 204.8v102.4H512V307.2H27.2z"
      />
      <Path fill="#d80027" d="M0 0v512l256-256L0 0z" />
      <Path
        fill="#eee"
        d="m103.6 189.2 16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6H87z"
      />
    </G>
  </Svg>
);
export default SvgCu;
