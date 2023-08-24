import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEsVariant = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="es-variant_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#es-variant_svg__a)">
      <Path
        fill="#d80027"
        d="M0 0h512v128l-39.8 130.3L512 384v128H0V384l37.8-124L0 128z"
      />
      <Path fill="#ffda44" d="M0 128h512v256H0z" />
    </G>
  </Svg>
);
export default SvgEsVariant;
