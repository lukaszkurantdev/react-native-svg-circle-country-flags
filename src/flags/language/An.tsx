import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="an_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#an_svg__a)">
      <Path
        fill="#ffda44"
        d="M0 0v57l32 29-32 28v57l32 29-32 28v57l32 28-32 28v57l32 29-32 28v57h512v-57l-32-28 32-29v-57l-32-28 32-28v-57l-32-28 32-29v-57l-32-28 32-29V0H0z"
      />
      <Path
        fill="#d80027"
        d="M0 57h512v57H0Zm0 114h512v57H0Zm0 114h512v56H0Zm0 113h512v57H0Z"
      />
      <Path
        fill="#ff9811"
        d="M96 128v160l96 96c53 0 96-43 96-96l-48-48 48-48v-64h-28v32h-27v-32h-27v32h-28v-32h-27v32h-28v-32z"
      />
      <Path fill="#0052b4" d="M192 192h96v96h-96z" />
      <Path fill="#eee" d="M192 288v96a96 96 0 0 1-96-96Z" />
    </G>
  </Svg>
);
export default SvgAn;
