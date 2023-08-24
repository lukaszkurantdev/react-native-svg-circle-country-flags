import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgOc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="oc_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#oc_svg__a)">
      <Path fill="#d80027" d="M0 0h512v512H0z" />
      <Circle cx={256} cy={64} r={32} fill="#ffda44" />
      <Circle cx={64} cy={256} r={32} fill="#ffda44" />
      <Circle cx={448} cy={256} r={32} fill="#ffda44" />
      <Circle cx={256} cy={448} r={32} fill="#ffda44" />
      <Circle cx={352} cy={400} r={32} fill="#ffda44" />
      <Circle cx={400} cy={352} r={32} fill="#ffda44" />
      <Circle cx={352} cy={112} r={32} fill="#ffda44" />
      <Circle cx={400} cy={160} r={32} fill="#ffda44" />
      <Circle cx={160} cy={112} r={32} fill="#ffda44" />
      <Circle cx={112} cy={160} r={32} fill="#ffda44" />
      <Circle cx={112} cy={352} r={32} fill="#ffda44" />
      <Circle cx={160} cy={400} r={32} fill="#ffda44" />
      <Path
        fill="#ffda44"
        d="m256 60-103 52 20 61-61-20-52 103 52 103 61-20-20 61 103 52 103-52-20-61 61 20 52-103-52-103-61 20 20-61zm0 36 64 32-32 96 96-32 32 64-32 64-96-32 32 96-64 32-64-32 32-96-96 32-32-64 32-64 96 32-32-96z"
      />
    </G>
  </Svg>
);
export default SvgOc;
