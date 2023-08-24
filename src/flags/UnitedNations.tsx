import * as React from 'react';
import Svg, { Mask, Circle, G, Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgUnitedNations = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="united_nations_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#united_nations_svg__a)">
      <Path fill="#338af3" d="M0 0h512v512H0z" />
      <Circle cx={256} cy={256} r={145} fill="#eee" />
      <Circle cx={256} cy={256} r={111} fill="#338af3" />
      <Path fill="#338af3" d="M76 76h360L256 256z" />
      <Circle cx={256} cy={256} r={89} fill="#eee" />
      <Circle cx={256} cy={256} r={69} fill="#338af3" />
      <Path fill="#eee" d="M246 178h20v156h-20z" />
      <Path fill="#eee" d="M334 246v20H178v-20z" />
      <Path fill="#eee" d="m304 193.7 14.2 14.2-110.3 110.3-14.2-14.1z" />
      <Path fill="#eee" d="m318.2 304-14.1 14.2-110.4-110.3 14.2-14.2z" />
      <Circle cx={256} cy={256} r={44} fill="#eee" />
      <Circle cx={256} cy={256} r={22} fill="#338af3" />
      <Ellipse cx={256} cy={412} fill="#eee" rx={44} ry={40} />
      <Path fill="#338af3" d="m256 407-78 63h156z" />
    </G>
  </Svg>
);
export default SvgUnitedNations;
