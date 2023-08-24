import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgUsDc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="us-dc_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#us-dc_svg__a)">
      <Path
        fill="#eee"
        d="M0 0h512v186l-64 48 64 48v57l-64 48 64 48v77H0v-77l64-48-64-48v-57l64-48-64-48Z"
      />
      <Path
        fill="#d80027"
        d="M0 186h512v96H0zm0 153h512v96H0zm224-181 83-60H205l83 60-32-98Zm118 0 83-60H323l83 60-32-98Zm-236 0 83-60H87l83 60-32-98Z"
      />
    </G>
  </Svg>
);
export default SvgUsDc;
