import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSz = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="sz_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#sz_svg__a)">
      <Path
        fill="#ffda44"
        d="m0 144.7 256-20.5 256 20.5V178l-37.4 79 37.4 77v33.3l-256 24.1L0 367.3V334l37.7-77.3L0 178z"
      />
      <Path fill="#333" d="M0 0h512v144.7H0z" />
      <Path fill="#0052b4" d="M0 367.3h512V512H0z" />
      <Path fill="#a2001d" d="M0 178h512v156H0z" />
      <Path
        fill="#ffda44"
        d="M89.2 244.9h334V267h-334zm44.6-44.6h244.8v22.3H133.8z"
      />
      <Path
        fill="#eee"
        d="m256.2 189.2-18 65.2 18 68.4c66.8 0 124-66.8 124-66.8s-57.2-66.8-124-66.8z"
      />
      <Path
        fill="#333"
        d="M256.2 322.8c-66.8 0-124-66.8-124-66.8s57.2-66.8 124-66.8"
      />
      <Path fill="#eee" d="M211.7 233.7h22.2v44.6h-22.2z" />
      <Path fill="#333" d="M278.5 233.7h22.2v44.6h-22.2z" />
      <G fill="#0052b4" transform="translate(.2)">
        <Circle cx={89} cy={256} r={22.3} />
        <Circle cx={423} cy={256} r={22.3} />
      </G>
    </G>
  </Svg>
);
export default SvgSz;
