import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgOm = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="om_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#om_svg__a)">
      <Path fill="#eee" d="M189.2 0H512v167l-347.5 24.6z" />
      <Path fill="#6da544" d="m163 320 349 25v167H189.2z" />
      <Path fill="#d80027" d="M0 0h189.2v167H512v178H189.2v167H0z" />
      <Path
        fill="#eee"
        d="M156.6 112.7 133 89l-15.7 15.8L101.5 89 78 112.7l15.8 15.7L78 144l23.6 23.6 15.8-15.7 15.7 15.7 23.6-23.6-15.7-15.7z"
      />
    </G>
  </Svg>
);
export default SvgOm;
