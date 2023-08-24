import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgFrBre = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="fr-bre_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#fr-bre_svg__a)">
      <Path
        fill="#eee"
        d="M0 0h256l256 57v57l-32 28 32 29v57l-32 28 32 29v56l-32 29 32 28v57l-256 29L0 455v-57l32-28-32-29v-56l32-29-32-28Z"
      />
      <Path
        fill="#333"
        d="M256 0h256v57H256zm0 114h256v57H256zM0 228h512v57H0zm0 113h512v57H0zm0 114h512v57H0zM16 72l19 14 19-14-19-40z"
      />
      <Circle cx={46.7} cy={32.4} r={6} fill="#333" />
      <Circle cx={22.7} cy={32.4} r={6} fill="#333" />
      <Circle cx={34.7} cy={20.4} r={6} fill="#333" />
      <Path fill="#333" d="m109 72 19 14 19-14-19-40z" />
      <Circle cx={140.4} cy={32.4} r={6} fill="#333" />
      <Circle cx={116.4} cy={32.4} r={6} fill="#333" />
      <Circle cx={128.4} cy={20.4} r={6} fill="#333" />
      <Path fill="#333" d="m203 72 19 14 19-14-19-40z" />
      <Circle cx={234.1} cy={32.4} r={6} fill="#333" />
      <Circle cx={210.1} cy={32.4} r={6} fill="#333" />
      <Circle cx={222.1} cy={20.4} r={6} fill="#333" />
      <Path fill="#333" d="m156 138 19 14 19-14-19-40z" />
      <Circle cx={187.2} cy={98.2} r={6} fill="#333" />
      <Circle cx={163.2} cy={98.2} r={6} fill="#333" />
      <Circle cx={175.2} cy={86.2} r={6} fill="#333" />
      <Path fill="#333" d="m63 138 19 14 18-14-18-40z" />
      <Circle cx={93.5} cy={98.2} r={6} fill="#333" />
      <Circle cx={69.5} cy={98.2} r={6} fill="#333" />
      <Circle cx={81.5} cy={86.2} r={6} fill="#333" />
      <Path fill="#333" d="m16 204 19 14 19-14-19-40z" />
      <Circle cx={46.7} cy={164} r={6} fill="#333" />
      <Circle cx={22.7} cy={164} r={6} fill="#333" />
      <Circle cx={34.7} cy={152} r={6} fill="#333" />
      <Path fill="#333" d="m109 204 19 14 19-14-19-40z" />
      <Circle cx={140.4} cy={164} r={6} fill="#333" />
      <Circle cx={116.4} cy={164} r={6} fill="#333" />
      <Circle cx={128.4} cy={152} r={6} fill="#333" />
      <Path fill="#333" d="m203 204 19 14 19-14-19-40z" />
      <Circle cx={234.1} cy={164} r={6} fill="#333" />
      <Circle cx={210.1} cy={164} r={6} fill="#333" />
      <Circle cx={222.1} cy={152} r={6} fill="#333" />
    </G>
  </Svg>
);
export default SvgFrBre;
