import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMd = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="md_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#md_svg__a)">
      <Path fill="#0052b4" d="M0 0h144.7l36 254.6-36 257.4H0z" />
      <Path fill="#d80027" d="M367.3 0H512v512H367.3l-29.7-257.3z" />
      <Path fill="#ffda44" d="M144.7 0h222.6v512H144.7z" />
      <Path
        fill="#ff9811"
        d="M345.1 201.4H284a27.8 27.8 0 1 0-55.6 0h-61.2a28.2 28.2 0 0 0 28.3 27.4h-1a27.4 27.4 0 0 0 27.5 27.4c0 13.4 9.6 24.5 22.3 27l-21.6 48.7a88.8 88.8 0 0 0 33.5 6.5 88.8 88.8 0 0 0 33.5-6.5L268.1 283a27.4 27.4 0 0 0 22.3-26.9 27.4 27.4 0 0 0 27.4-27.4h-.9a28.2 28.2 0 0 0 28.3-27.4z"
      />
      <Path
        fill="#0052b4"
        d="M256.1 239.3 220 256v33.4l36.2 22.3 36.2-22.3V256z"
      />
      <Path fill="#d80027" d="M220 222.6h72.3V256H220z" />
    </G>
  </Svg>
);
export default SvgMd;
