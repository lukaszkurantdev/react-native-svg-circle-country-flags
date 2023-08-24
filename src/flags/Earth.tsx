import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEarth = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="earth_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#earth_svg__a)">
      <Path fill="#0052b4" d="M0 0h512v512H0z" />
      <Path
        fill="#eee"
        d="M302.7 233.7a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
      />
      <Path
        fill="#eee"
        d="M209.4 72.3a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
      />
      <Path
        fill="#eee"
        d="M302.7 72.3a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
      />
      <Path
        fill="#eee"
        d="M349.2 153a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
      />
      <Path
        fill="#eee"
        d="M209.4 233.7a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
      />
      <Path
        fill="#eee"
        d="M162.8 153a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83s-37 83-83 83-83-37-83-83 37-83 83-83z"
      />
      <Path
        fill="#eee"
        d="M256 153.1a103.1 103.1 0 0 0 0 206 103.1 103.1 0 0 0 0-206zm0 20c46 0 83 37 83 83 0 45.9-37 83-83 83s-83-37.1-83-83c0-46 37-83 83-83z"
      />
    </G>
  </Svg>
);
export default SvgEarth;
