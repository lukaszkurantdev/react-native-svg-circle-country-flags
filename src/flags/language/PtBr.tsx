import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPtBr = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Mask id="pt-br_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#pt-br_svg__a)">
      <Path fill="#6da544" d="M512 0v512H0l224-288Z" />
      <Path fill="#ffda44" d="m346 166-122 58-58 122 90 66 212-156Z" />
      <Path
        fill="#0052b4"
        d="m319 193-95 31-31 95a89 89 0 0 0 136-12l14-34a89 89 0 0 0-24-80z"
      />
      <Path
        fill="#eee"
        d="M255 257c29 9 55 26 74 50 7-10 12-22 14-34-17-18-38-32-62-42l-57-7Z"
      />
      <Path fill="#fff" d="M0 512 512 0H0Z" />
      <Path fill="#496e2d" d="M0 0v512l167-167 32-172L167 0Z" />
      <Path fill="#d80027" d="M167 0v167l89 89L512 0Z" />
      <Path
        fill="#ffda44"
        d="M167 167a89 89 0 0 0-89 89 89 89 0 0 0 89 89l89-89a89 89 0 0 0-89-89z"
      />
      <Path fill="#d80027" d="M117 212v55a50 50 0 1 0 100 0v-56H117Z" />
      <Path
        fill="#eee"
        d="M167 284c-9 0-17-8-17-17v-22h34v22c0 9-8 17-17 17z"
      />
    </G>
  </Svg>
);
export default SvgPtBr;
