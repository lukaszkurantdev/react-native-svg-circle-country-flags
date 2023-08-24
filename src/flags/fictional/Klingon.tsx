import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgKlingon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="klingon_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#klingon_svg__a)">
      <Path fill="#d80027" d="M0 0h512v512H0z" />
      <Circle cx={256} cy={277} r={126} fill="#eee" />
      <Path
        fill="#333"
        d="M256 355c15.1-25.3 28.9-39.7 44-65-3.5-15.8-17.3-7.1-43-204-29 198.4-44.5 189.4-46 202 14.8 25.8 30.2 41.2 45 67zm-53-51c11.5 17.7 32.5 42.3 44 60-69.2 4.6-83.4 21.3-107 46-4.2-81.8 50.6-81.5 63-106zm63 59c13.3-19.2 29.7-41.8 43-61 22.6 46.3 52.6 59.7 80 62-21.4 30.2-76.8 27.2-123-1z"
      />
    </G>
  </Svg>
);
export default SvgKlingon;
