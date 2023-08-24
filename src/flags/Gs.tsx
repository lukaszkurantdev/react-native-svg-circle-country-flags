import * as React from 'react';
import Svg, { Mask, Circle, G, Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGs = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="gs_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#gs_svg__a)">
      <Path fill="#0052b4" d="M256 0h256v512H0V256Z" />
      <Path
        fill="#eee"
        d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
      />
      <Path
        fill="#d80027"
        d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
      />
      <Rect
        width={64}
        height={32}
        x={336}
        y={256}
        fill="#6da544"
        rx={16}
        ry={16}
      />
      <Circle cx={368} cy={96} r={32} fill="#ff9811" />
      <Circle cx={368} cy={144} r={48} fill="#acabb1" />
      <Path fill="#338af3" d="M320 144v77c0 36 48 48 48 48s48-12 48-48v-77z" />
      <Rect
        width={32}
        height={128}
        x={288}
        y={128}
        fill="#333"
        rx={16}
        ry={16}
      />
      <Rect
        width={32}
        height={128}
        x={416}
        y={128}
        fill="#333"
        rx={16}
        ry={16}
      />
      <Path fill="#6da544" d="m320 144 48 112 48-112z" />
      <Path fill="#ffda44" d="M288 288v32h32v8h96v-8h32v-32h-32v8h-96v-8z" />
    </G>
  </Svg>
);
export default SvgGs;
