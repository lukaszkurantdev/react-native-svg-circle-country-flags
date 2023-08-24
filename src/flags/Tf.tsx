import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="tf_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#tf_svg__a)">
      <Path fill="#0052b4" d="M256 0h256v512H0V256Z" />
      <Path fill="#eee" d="M0 0h256v256H0z" />
      <Path fill="#0052b4" d="M0 0h75v224H0z" />
      <Path fill="#d80027" d="M149 0h75v224h-75z" />
      <Path
        fill="#eee"
        d="m323 158 13 21h36v71l-27-43-37 59h18l19-34 39 70 39-70 19 34h18l-37-59-27 43v-39h16l12-20h-28v-12h36l13-21zm43 88h-40v14h40zm76 0h-40v14h40z"
      />
      <Path
        fill="#eee"
        d="m301 181 13 38-34-23h42l-34 23zm166 0 13 38-34-23h42l-34 23zM339 282l13 38-34-23h42l-34 23zm90 0 13 38-34-23h42l-34 23zm-45 34 13 38-34-23h42l-34 23z"
      />
    </G>
  </Svg>
);
export default SvgTf;
