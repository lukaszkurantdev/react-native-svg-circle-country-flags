import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="non_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#non_svg__a)">
      <Path fill="#eee" d="M16 16h480l16 16v480H32l-16-16Z" />
      <Path
        fill="#333"
        d="M0 0v512h32v-97c42-2 83-10 122-25l37 90 30-12-37-89c38-18 73-41 103-70l68 69 23-23-69-68c29-30 52-65 70-103l89 37 12-30-90-37c15-39 23-80 25-122h97V0Zm256 32c46 0 88 14 123 37A368 368 0 0 1 69 379 224 224 0 0 1 256 32Z"
      />
      <Path
        fill="#333"
        d="M194 138a28 28 0 0 0-28 28H82a28 28 0 0 0 28 28 28 28 0 0 0 28 28 28 28 0 0 0 28 28h56a28 28 0 0 0 28-28 28 28 0 0 0 28-28 28 28 0 0 0 28-28h-84a28 28 0 0 0-28-28z"
      />
    </G>
  </Svg>
);
export default SvgNon;
