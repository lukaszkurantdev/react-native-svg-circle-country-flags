import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTy = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="ty_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#ty_svg__a)">
      <Path
        fill="#d80027"
        d="M0 0h512v133.7l-52 126 52 118.8V512H0V378.5l53-121L0 133.6z"
      />
      <Path fill="#eee" d="M0 133.7h512v244.8H0z" />
      <Path
        fill="#ffda44"
        d="M345 256.1c0 49.2-39.8 78-89 78s-89-28.8-89-78a89 89 0 1 1 178 0z"
      />
      <Path fill="#0052b4" d="M345 256.1a89 89 0 1 1-178 0" />
      <Path
        fill="#d80027"
        d="M200.3 233.8h22.3v44.6h-22.3zm89 0h22.4v44.6h-22.3zM245 200.4h22v78h-22z"
      />
    </G>
  </Svg>
);
export default SvgTy;
