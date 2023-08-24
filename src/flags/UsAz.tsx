import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgUsAz = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="us-az_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#us-az_svg__a)">
      <Path
        fill="#d80027"
        d="M71 0 0 34v91l16 35-16 36v60l256 64 256-64v-60l-16-36 16-35V34L441 0h-85l-32 16-32-16h-72l-32 16-32-16Z"
      />
      <Path fill="#0052b4" d="M0 256h512v256H0Z" />
      <Path
        fill="#ffda44"
        d="m292 0-36 256L356 0h-64zm-36 256L512 34V0h-71L256 256zm0 0 256-60v-71L256 256zm0 0L0 125v71l256 60zm0 0L71 0H0v35l256 221zm0 0L220 0h-64l100 256z"
      />
      <Path fill="#ff9811" d="m256 128 83 256-217-159h268L173 384Z" />
    </G>
  </Svg>
);
export default SvgUsAz;
