import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgKh = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="kh_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#kh_svg__a)">
      <Path
        fill="#0052b4"
        d="M0 0h512v133.7l-39 121.6 39 123.2V512H0V378.5L34.2 255 0 133.7z"
      />
      <Path fill="#d80027" d="M0 133.7h512v244.8H0z" />
      <Path
        fill="#eee"
        d="M345 306.1v-33.3h-22.2v-44.5L300.5 206l-22.2 22.3v-44.5L256 161.5l-22.3 22.3v44.5L211.5 206l-22.3 22.3v44.5H167v33.4h-22.3v33.4h222.6v-33.5z"
      />
    </G>
  </Svg>
);
export default SvgKh;
