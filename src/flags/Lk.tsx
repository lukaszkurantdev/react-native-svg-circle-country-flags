import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLk = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="lk_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#lk_svg__a)">
      <Path fill="#ff9811" d="M81.4 27.2h135.2v456.5H81.4z" />
      <Path fill="#6da544" d="m0 44.5 100.2-22v463L0 467.5z" />
      <Path
        fill="#a2001d"
        d="m218.6 26.5 293.4 18v93.2l-18.6 106.2 18.6 97.4v126.2l-293.4 18z"
      />
      <Path
        fill="#ffda44"
        d="M0 0v44.5h200.3v423H0V512h512v-44.5H233.7v-423H512V0z"
      />
      <Path
        fill="#ffda44"
        d="M300.5 94.6c-18.4 0-33.4 15-33.4 33.4v144.6a33 33 0 0 0 11.2 25v53h22.2v-27.8h100.2v44.5h-22.3v22.3H423V345l20.4-22.2h48.2a72.9 72.9 0 0 0 20.4 18.5V137.7a66 66 0 0 0-22.5 13.1 67.8 67.8 0 0 0-13.2 82.9c-21.3-.1-41 .2-53.3 0V167c0-11.2-16.7-22.3-16.7-22.3s-16.7 11.1-16.7 22.3h-66.8v66.7h33.4v33.4c0 7.1 1.4 14.1 4.1 20.7L345 300.6h-44.5v-206z"
      />
    </G>
  </Svg>
);
export default SvgLk;
