import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTz = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="tz_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#tz_svg__a)">
      <Path fill="#eee" d="M0 0h512v512H0z" />
      <Path
        fill="#ffda44"
        d="M399 0 167 167 0 399v45l68 68h45l232-167 167-232V68L444 0Z"
      />
      <Path fill="#333" d="M444 0 0 444v68h68L512 68V0Z" />
      <Path fill="#338af3" d="m113 512 399-399v399z" />
      <Path fill="#6da544" d="M0 399V0h399Z" />
    </G>
  </Svg>
);
export default SvgTz;
