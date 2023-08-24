import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNu = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="nu_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#nu_svg__a)">
      <Path fill="#ffda44" d="M0 256 256 0h256v512H0z" />
      <Path
        fill="#eee"
        d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32l42-16 41 16h45l-8-16 8-15v-14l-16-42 16-41V96l-32-32 32-32V0H96L64 32 32 0Z"
      />
      <Path fill="#0052b4" d="M128 256v-83l83 83zm128-45-83-83h83z" />
      <Path fill="#d80027" d="m128 128 128 128v-31l-97-97Z" />
      <Path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Z" />
      <Circle cx={64} cy={64} r={48} fill="#0052b4" />
      <Path
        fill="#ffda44"
        d="m50 198 14-44 15 44-38-27h47zM162 86l14-44 15 44-38-27h47ZM64 17l28 86-73-53h90l-73 53Z"
      />
    </G>
  </Svg>
);
export default SvgNu;
