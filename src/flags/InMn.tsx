import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgInMn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="in-mn_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#in-mn_svg__a)">
      <Path fill="#d80027" d="M0 0h512v73L256 96 0 73Z" />
      <Path fill="#eee" d="M0 73h512v73l-256 23L0 146Z" />
      <Path fill="#333" d="M0 146h512v73l-256 23L0 219Z" />
      <Path fill="#ffda44" d="M0 219h512v74l-256 22L0 293Z" />
      <Path fill="#4a1f63" d="M0 293h512v73l-256 23L0 366Z" />
      <Path fill="#338af3" d="M0 366h512v73l-256 23L0 439Z" />
      <Path fill="#6da544" d="M0 439h512v73H0z" />
    </G>
  </Svg>
);
export default SvgInMn;
