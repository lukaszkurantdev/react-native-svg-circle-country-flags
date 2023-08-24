import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBqBo = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="bq-bo_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#bq-bo_svg__a)">
      <Path
        fill="#eee"
        d="M113.7 119.8 276 0h236v31.7L306 289.5 31.6 512H0V276z"
      />
      <Path fill="#ffda44" d="M0 0v276L276 0H0z" />
      <Path fill="#0052b4" d="M512 31.7 31.7 512H512V31.7z" />
      <Path
        fill="#333"
        d="m255 245.7 22.1-12-22-12a78 78 0 0 0-65-65l-12-22-12 22a78 78 0 0 0-65 65l-22 12 22 12a78 78 0 0 0 65 65l12 22.1 12-22a78 78 0 0 0 65-65zm-77 32.6a44.5 44.5 0 1 1 0-89 44.5 44.5 0 0 1 0 89z"
      />
      <Path
        fill="#d80027"
        d="m178 200.3 9.7 16.7H207l-9.6 16.7 9.6 16.7h-19.3l-9.6 16.7-9.7-16.7h-19.2l9.6-16.7-9.6-16.7h19.2z"
      />
    </G>
  </Svg>
);
export default SvgBqBo;
