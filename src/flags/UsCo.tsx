import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgUsCo = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="us-co_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#us-co_svg__a)">
      <Path
        fill="#0052b4"
        d="M0 0h512v167l-64 89 64 89v167H0V345l64-89-64-89Z"
      />
      <Path fill="#eee" d="M0 167h512v178H0z" />
      <Path
        fill="#d80027"
        d="M344.3 299.8A128 128 0 0 1 201.8 382 128 128 0 0 1 96 256a128 128 0 0 1 105.8-126 128 128 0 0 1 142.5 82.2L224 256z"
      />
      <Circle cx={224} cy={256} r={64} fill="#ffda44" />
    </G>
  </Svg>
);
export default SvgUsCo;
