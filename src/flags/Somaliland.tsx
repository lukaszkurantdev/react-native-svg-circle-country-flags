import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSomaliland = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="somaliland_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#somaliland_svg__a)">
      <Path fill="#eee" d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z" />
      <Path fill="#496e2d" d="M0 0h512v167H0z" />
      <Path fill="#d80027" d="M0 345h512v167H0z" />
      <Path
        fill="#333"
        d="m256 200.3 13.8 42.6h44.7L278.4 269l13.8 42.6-36.2-26.3-36.2 26.3 13.8-42.6-36.1-26.2h44.7z"
      />
      <G fill="#eee">
        <Path d="M332 50v52c0 8.2-6.6 14.9-14.8 14.9V139a37.1 37.1 0 0 0 37.1-37V50h-22.2zm-159.5 52c0 8.2-6.6 14.9-14.8 14.9V139a37.1 37.1 0 0 0 37-37V50h-22.2z" />
        <Path d="M298.7 50h22.2v52h-22.2zm-33.4 29.8a3.7 3.7 0 0 1-3.7 3.7 3.7 3.7 0 0 1-3.7-3.7V50h-22.3v29.7a3.7 3.7 0 0 1-3.7 3.7 3.7 3.7 0 0 1-3.7-3.7V50h-22.3v29.7a26 26 0 0 0 26 26 25.8 25.8 0 0 0 14.8-4.7 25.8 25.8 0 0 0 14.9 4.6c1 0 2.2 0 3.2-.2a14.9 14.9 0 0 1-14.4 11.4V139a37.1 37.1 0 0 0 37.1-37V50h-22.2v29.7z" />
        <Path d="M206 116.9h33.3V139h-33.4z" />
      </G>
    </G>
  </Svg>
);
export default SvgSomaliland;
