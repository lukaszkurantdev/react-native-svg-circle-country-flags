import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPap = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="pap_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#pap_svg__a)">
      <Path
        fill="#ffda44"
        d="m0 322.8 253.6-18.4L512 322.8v33.4l-258 15.3L0 356.2zm0 66.8 257.2-13.8L512 389.6V423l-253 16.9L0 423z"
      />
      <Path
        fill="#338af3"
        d="M0 0h512v322.8H0zm0 356.2h512v33.4H0zM0 423h512v89H0z"
      />
      <Path
        fill="#eee"
        d="m117.3 161.5-50-22.1 50-22 22-50.1 22.2 50 50 22-50 22.2-22.1 50z"
      />
      <Path
        fill="#d80027"
        d="m139.4 94.9 13.6 30.9 31 13.6-31 13.6-13.6 31-13.6-31-31-13.6 31-13.6z"
      />
    </G>
  </Svg>
);
export default SvgPap;
