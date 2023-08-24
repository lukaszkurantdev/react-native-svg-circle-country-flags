import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgUsGa = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="us-ga_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#us-ga_svg__a)">
      <Path fill="#d80027" d="M512 0v171l-64 85 64 85v171H0V341L341 0Z" />
      <Path fill="#eee" d="M341 171h171v170H341l-64-85z" />
      <Path fill="#0052b4" d="M0 0h341v341H0Z" />
      <Path
        fill="#ffda44"
        d="M184 133a40 40 0 0 0-40 40v60h80v-60a40 40 0 0 0-40-40z"
      />
      <Path
        fill="#eee"
        d="m167 105 52-37h-64l52 37-20-61zm101 62 37 52v-64l-37 52 61-20zm-62 101-52 37h64l-52-37 20 61zm-101-61-37-52v64l37-52-61 20zm125-92 63 10-45-45 10 63 29-57zm28 115-10 63 45-45-63 10 57 29zm-115 28-63-10 45 45-10-63-29 57Zm-28-115 10-63-45 45 63-10-57-29Z"
      />
    </G>
  </Svg>
);
export default SvgUsGa;
