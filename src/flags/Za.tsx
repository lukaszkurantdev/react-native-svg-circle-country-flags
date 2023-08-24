import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgZa = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="za_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#za_svg__a)">
      <Path
        fill="#eee"
        d="m0 0 192 256L0 512h47l465-189v-34l-32-33 32-33v-34L47 0Z"
      />
      <Path fill="#333" d="M0 142v228l140-114z" />
      <Path fill="#ffda44" d="M192 256 0 95v47l114 114L0 370v47z" />
      <Path
        fill="#6da544"
        d="M512 223H223L0 0v94l161 162L0 418v94l223-223h289z"
      />
      <Path fill="#d80027" d="M512 0H47l189 189h276z" />
      <Path fill="#0052b4" d="M512 512H47l189-189h276z" />
    </G>
  </Svg>
);
export default SvgZa;
