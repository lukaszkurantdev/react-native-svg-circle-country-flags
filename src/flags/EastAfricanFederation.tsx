import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEastAfricanFederation = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="east_african_federation_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#east_african_federation_svg__a)">
      <Path
        fill="#338af3"
        d="M0 0h512v141l-64 115 64 115v141H0V371l64-115L0 141Z"
      />
      <Path fill="#eee" d="M0 141h512v23l-256 16L0 164Z" />
      <Path fill="#333" d="M0 164h512v38l-256 16L0 202Z" />
      <Path fill="#6da544" d="m0 220 256 16 256-16v-18H0Z" />
      <Path fill="#eee" d="M0 371h512v-23l-256-16L0 348Z" />
      <Path fill="#ff9811" d="M0 348h512v-38l-256-16L0 310Z" />
      <Path fill="#6da544" d="m0 292 256-16 256 16v18H0Z" />
      <Path fill="#ffda44" d="M0 220h512v72H0z" />
      <Circle cx={256} cy={248} r={64} fill="#eee" />
      <Path fill="#eee" d="m178 301 78-29 78 29v27H178Z" />
    </G>
  </Svg>
);
export default SvgEastAfricanFederation;
