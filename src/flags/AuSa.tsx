import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAuSa = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="au-sa_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#au-sa_svg__a)">
      <Path fill="#0052b4" d="M256 0h256v512H0V256Z" />
      <Path
        fill="#eee"
        d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
      />
      <Path
        fill="#d80027"
        d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
      />
      <Circle cx={382} cy={256} r={74} fill="#ff9811" />
      <Path
        fill="#333"
        d="M382 228a14 14 0 0 0-14 14h-42a14 14 0 0 0 14 14 14 14 0 0 0 14 14 14 14 0 0 0 14 14h28a14 14 0 0 0 14-14 14 14 0 0 0 14-14 14 14 0 0 0 14-14h-42a14 14 0 0 0-14-14z"
      />
    </G>
  </Svg>
);
export default SvgAuSa;
