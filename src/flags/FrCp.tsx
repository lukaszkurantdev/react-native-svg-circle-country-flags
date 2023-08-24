import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgFrCp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="fr-cp_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#fr-cp_svg__a)">
      <Path fill="#0052b4" d="M0 0h512v512H0Z" />
      <Path fill="#fff" d="m256 52 204 204-204 204L52 256Z" />
      <Path fill="#ff9811" d="m232 463 12-299h24l12 299z" />
      <Path
        fill="#6da544"
        d="M293 172c31-14 42-23 90-22-40-18-77-23-108 0 9-23 27-54 59-77-55 9-82 36-86 68-14-32-55-45-100-45 50 27 36 27 73 63-32-5-68 9-104 50 49-27 72-18 104-14a90 90 0 0 0-41 86c36-45 31-32 77-72 18 40 40 49 49 86 9-37 0-77-18-91 36 14 68 23 86 50-9-63-50-72-81-82z"
      />
    </G>
  </Svg>
);
export default SvgFrCp;
