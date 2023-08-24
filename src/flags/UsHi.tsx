import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgUsHi = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="us-hi_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#us-hi_svg__a)">
      <Path
        fill="#eee"
        d="M0 256V96l32-32L0 32V0h32l32 32L96 0h416v64l-32 64 32 64v64l-32 64 32 64v64l-256 32L0 448v-64l32-64z"
      />
      <Path
        fill="#0052b4"
        d="m173 128 83 83v-19h256v-64L384 96l-128 32Zm-45 45v83h83zM0 320v64h512v-64l-256-32Z"
      />
      <Path
        fill="#d80027"
        d="M32 0v32H0v64h32v160H0v64h512v-64H96V96h160v32h256V64H256V32H96V0H32zm224 256v-31l-97-97h-31l128 128zM0 448v64h512v-64H0z"
      />
    </G>
  </Svg>
);
export default SvgUsHi;
