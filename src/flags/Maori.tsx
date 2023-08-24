import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMaori = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="maori_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#maori_svg__a)">
      <Path
        fill="#eee"
        d="m0 68.6 247.8-24.7L512 299v93.9l-399.2 36.2L0 162.5z"
      />
      <Path fill="#333" d="M0 0v68.6h178a115.2 115.2 0 1 1 0 230.4h334V0z" />
      <Path
        fill="#d80027"
        d="M0 162.5V512h512V392.9H178a93.9 93.9 0 1 1 0-187.8 47 47 0 0 1 0 93.9 68.3 68.3 0 0 0 0-136.5z"
      />
    </G>
  </Svg>
);
export default SvgMaori;
