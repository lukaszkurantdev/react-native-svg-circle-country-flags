import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgFj = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="fj_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#fj_svg__a)">
      <Path fill="#338af3" d="M256 0h256v512H0V256Z" />
      <Path
        fill="#eee"
        d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32l42-16 41 16h45l-8-16 8-15v-14l-16-42 16-41V96l-32-32 32-32V0H96L64 32 32 0Z"
      />
      <Path fill="#0052b4" d="M128 256v-83l83 83zm128-45-83-83h83z" />
      <Path
        fill="#eee"
        d="m367.3 144.7-78 22.3h.1v66.7l9.2 11-9.2 11.3c0 45.5 45.3 67 66.8 74.6l11.5-8.8 10.7 8.8c21.5-7.7 66.8-29.1 66.8-74.6l-8-11 8-11.3V167Z"
      />
      <Path
        fill="#d80027"
        d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97zm317.2 39v-33.4H289.4V167h66.8v66.7h-66.8V256h66.8v74.6a111 111 0 0 0 11.1 3.4s4.4-1 11.1-3.4V256h66.8v-22.3h-66.8V167Z"
      />
    </G>
  </Svg>
);
export default SvgFj;
