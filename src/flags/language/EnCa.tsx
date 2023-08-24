import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEnCa = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="en-ca_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#en-ca_svg__a)">
      <Path
        fill="#eee"
        d="M144 0 45 512h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-72 32-72-32Z"
      />
      <Path
        fill="#0052b4"
        d="M512 68 404 176h108V68zM404 336l108 108V336H404zm-228 68L68 512h108V404zm160 0v108h108L336 404z"
      />
      <Path
        fill="#d80027"
        d="M0 0v512h45l131-131v-45l-32 32V0H0zm368 0v144L512 0H368zM256 34l-22 33h-23l23 45-45-22v22l-22 11 45 22-12 23h45v33h22v-33h45l-11-23 44-22-22-11V90l-45 22 23-44h-23l-22-34zm48 174-96 96v208h96V304h208v-96H304zm32 128 176 176v-45L381 336h-45z"
      />
    </G>
  </Svg>
);
export default SvgEnCa;
