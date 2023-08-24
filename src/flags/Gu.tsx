import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGu = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="gu_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#gu_svg__a)">
      <Path
        fill="#d80027"
        d="M0 0h512v44.6l-41.2 207.2L512 467.6V512H0v-44.4l38-219-38-204z"
      />
      <Path fill="#0052b4" d="M0 44.6h512v423H0z" />
      <Path
        fill="#d80027"
        d="M241.5 417.7c-3.5-3-85.7-74.5-85.7-161.6 0-87 82.2-158.6 85.7-161.6L256 82.1l14.5 12.4c3.5 3 85.7 74.4 85.7 161.6 0 87.2-82.2 158.6-85.7 161.6L256 430.1z"
      />
      <Path
        fill="#338af3"
        d="M334 256.1c0-78-78-144.7-78-144.7s-78 66.8-78 144.7a150 150 0 0 0 17.5 66.8h121a150 150 0 0 0 17.4-66.8z"
      />
      <Path
        fill="#0052b4"
        d="M334 256.1a150 150 0 0 1-17.5 66.8L256 334l-60.5-11a150 150 0 0 1-17.4-66.9h155.8z"
      />
      <Path
        fill="#ffda44"
        d="M256 400.8s37.5-32.2 60.5-78h-121c23 45.8 60.5 78 60.5 78z"
      />
      <Path fill="#6da544" d="M206 211.6h100l-50 50z" />
      <Path fill="#a2001d" d="M239.3 245h33.4v100.1h-33.4z" />
    </G>
  </Svg>
);
export default SvgGu;
