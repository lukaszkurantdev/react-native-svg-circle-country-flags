import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEnGh = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="en-gh_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#en-gh_svg__a)">
      <Path fill="#ffda44" d="M0 167v178l84 32 83-32 121-57 57-121-172-32z" />
      <Path fill="#496e2d" d="M0 345v167l115-52 52-115Z" />
      <Path fill="#d80027" d="M0 0v167h345l114-52L512 0Z" />
      <Path fill="#333" d="m102 345 151-109H67l151 109-58-178Z" />
      <Path
        fill="#eee"
        d="M512 0 0 512l23-8 22 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54z"
      />
      <Path
        fill="#d80027"
        d="m304 208-96 96v208h96V304h208v-96ZM176 336 0 512h45l131-131Zm160 0 176 176v-45L381 336Z"
      />
      <Path
        fill="#0052b4"
        d="M512 68 404 176h108ZM404 336l108 108V336Zm-228 68L68 512h108zm160 0v108h108z"
      />
    </G>
  </Svg>
);
export default SvgEnGh;
