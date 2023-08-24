import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGu = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="gu_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#gu_svg__a)">
      <Path
        fill="#eee"
        d="M256 96 0 128v128l256 32 256-32V128L256 96zm0 256L0 384v128h512V384l-256-32z"
      />
      <Path fill="#d80027" d="M0 0h512v128H0zm0 256h512v128H0z" />
    </G>
  </Svg>
);
export default SvgGu;
