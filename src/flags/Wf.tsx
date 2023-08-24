import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgWf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="wf_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#wf_svg__a)">
      <Path fill="#d80027" d="M256 0h256v512H0V256Z" />
      <Path fill="#eee" d="M0 0h256v256H0Z" />
      <Path fill="#0052b4" d="M0 0h75v224H0Z" />
      <Path fill="#d80027" d="M149 0h75v224h-75z" />
      <Path
        fill="#eee"
        d="m384 232-72-72h144zm-24 24-72-72v144zm24 24-72 72h144zm24-24 72-72v144z"
      />
    </G>
  </Svg>
);
export default SvgWf;
