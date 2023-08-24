import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgUsAk = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="us-ak_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#us-ak_svg__a)">
      <Path fill="#0052b4" d="M0 0h512v512H0z" />
      <Path
        fill="#ffda44"
        d="m336.8 199.7 104-75.1h-128l104 75.1-40-122.1zM57 231.7l52-37.4H45l52 37.4-20-60.9zm85.5 31.7 52-37.4h-64l52 37.4-20-60.9zM185 309l52-37.4h-64l52 37.4-20-60.9zm43 47.6 52-37.4h-64l52 37.4-20-60.9zm-5.6 67.1 52-37.4h-64l52 37.4-20-60.9zM356 402.2l52-37.4h-64l52 37.4-20-60.9zm-37.4 53.2 52-37.4h-64l52 37.4-20-60.9z"
      />
    </G>
  </Svg>
);
export default SvgUsAk;
