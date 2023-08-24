import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNorthernCyprus = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="northern_cyprus_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#northern_cyprus_svg__a)">
      <Path
        fill="#eee"
        d="M0 0v48l32 24L0 96v320l32 24-32 24v48h512v-48l-32-24 32-24V96l-32-24 32-24V0Z"
      />
      <Path
        fill="#d80027"
        d="M0 464h512v-48H0ZM0 48v48h512V48Zm270 255v-94l55 76-89-29 89-29z"
      />
      <Path
        fill="#d80027"
        d="M185 167a89 89 0 1 0 62 153 72 72 0 0 1-34 8 72 72 0 1 1 34-136 89 89 0 0 0-62-25Z"
      />
    </G>
  </Svg>
);
export default SvgNorthernCyprus;
