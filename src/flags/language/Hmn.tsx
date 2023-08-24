import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgHmn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="hmn_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#hmn_svg__a)">
      <Path fill="#d80027" d="M0 0h512v512H0z" />
      <Path
        fill="#ffda44"
        d="M41 32 16 51 6 72l12 33-14 17 5 27 12-26 13 18-34 34 54 15-19-18 24-17 24 17-19 18 54-15-34-34 13-18 12 26 5-27-14-17 12-33-10-21-25-19 17 37-23 24 3-24-15-25-15 25 3 24-23-24 17-37zm394 0-25 19-10 21 12 33-14 17 5 27 12-26 13 18-34 34 54 15-19-18 24-17 24 17-19 18 54-15-34-34 13-18 12 26 5-27-14-17 12-33-10-21-25-19 17 37-23 24 3-24-15-25-15 25 3 24-23-24 17-37zM228.3 42v32l-27.7 16 27.7 16v32l27.7-16 27.7 16v-32l27.7-16-27.7-16V42L256 58l-27.7-16zM256 244a111 111 0 0 0-111 111 111 111 0 0 0 111 111 111 111 0 0 0 111-111 111 111 0 0 0-111-111zM41 322l-25 19-10 21 28 69-34 34 54 15-19-18 24-17 24 17-19 18 54-15-34-34 28-69-10-21-25-19 17 37-23 24 3-24-15-25-15 25 3 24-23-24 17-37zm394 0-25 19-10 21 28 69-34 34 54 15-19-18 24-17 24 17-19 18 54-15-34-34 28-69-10-21-25-19 17 37-23 24 3-24-15-25-15 25 3 24-23-24 17-37z"
      />
    </G>
  </Svg>
);
export default SvgHmn;