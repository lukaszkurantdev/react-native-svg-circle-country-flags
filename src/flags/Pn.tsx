import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="pn_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#pn_svg__a)">
      <Path fill="#0052b4" d="M256 0h256v512H0V256Z" />
      <Path fill="#acabb1" d="m401 156-34 11-33-11-11-28 11-28h67l-11 28Z" />
      <Path
        fill="#338af3"
        d="M289 156v122c0 60 78 78 78 78s78-18 78-78V156H289z"
      />
      <Path
        fill="#6da544"
        d="M296 307c20 37 71 49 71 49s52-12 71-49l-71-118-71 118z"
      />
      <Path
        fill="#ffda44"
        d="m445 277-78-121-78 121v1a62 62 0 0 0 7 29l71-110 71 110a62 62 0 0 0 7-29z"
      />
      <Path
        fill="#eee"
        d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
      />
      <Path
        fill="#d80027"
        d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
      />
    </G>
  </Svg>
);
export default SvgPn;
