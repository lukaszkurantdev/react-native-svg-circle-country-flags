import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEsCt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="es-ct_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#es-ct_svg__a)">
      <Path
        fill="#ffda44"
        d="M0 0v57l32 29-32 28v57l32 29-32 28v57l32 28-32 28v57l32 29-32 28v57h512v-57l-32-28 32-29v-57l-32-28 32-28v-57l-32-28 32-29v-57l-32-28 32-29V0H0z"
      />
      <Path
        fill="#d80027"
        d="M0 57h512v57H0Zm0 114h512v57H0Zm0 114h512v56H0Zm0 113h512v57H0Z"
      />
    </G>
  </Svg>
);
export default SvgEsCt;
