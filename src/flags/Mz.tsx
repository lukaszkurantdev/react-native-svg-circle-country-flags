import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMz = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="mz_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#mz_svg__a)">
      <Path
        fill="#eee"
        d="m99 136.8 413 20v31.5l-35.9 66.1 36.2 68.4-.3 32.4-413 22z"
      />
      <Path fill="#496e2d" d="M512 156.8V0H0l122 156.8z" />
      <Path fill="#333" d="M167 188.3v134.5h345.3l-.3-134.5z" />
      <Path fill="#ffda44" d="M512 355.2V512H0l122-156.8z" />
      <Path fill="#a2001d" d="M0 0v512l256-256z" />
      <Path
        fill="#ffda44"
        d="m103.6 189.2 16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6H87z"
      />
      <Path fill="#eee" d="M55.1 256h97v44.5h-97z" />
      <Path
        fill="#333"
        d="m170.5 205-15.7-15.8-51.2 51.2-51.1-51.2L36.7 205 88 256l-51.2 51.3 15.8 15.5 51.1-51 51.2 51 15.7-15.5-51.2-51.2z"
      />
    </G>
  </Svg>
);
export default SvgMz;
