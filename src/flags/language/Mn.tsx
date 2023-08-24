import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="mn_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#mn_svg__a)">
      <Path
        fill="#a2001d"
        d="M0 0h167l84.9 45L345 0h167v512H345l-87.7-48.1L167 512H0z"
      />
      <Path fill="#0052b4" d="M167 0h178v512H167z" />
      <G fill="#ffda44">
        <Path d="M122.4 256h22.3v89h-22.3zm-89 0h22.3v89H33.4z" />
        <Circle cx={89} cy={289.4} r={22.3} />
        <Circle cx={89} cy={211.5} r={11.1} />
        <Path d="M66.8 322.8h44.5V345H66.8zm0-89h44.5V256H66.8zM89 133.5l8 24.2h25.4l-20.6 15 7.9 24.3L89 182l-20.6 15 7.9-24.3-20.6-15h25.5z" />
      </G>
    </G>
  </Svg>
);
export default SvgMn;
