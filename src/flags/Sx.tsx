import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSx = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="sx_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#sx_svg__a)">
      <Path fill="#d80027" d="M0 0h512v256l-265 45.2z" />
      <Path fill="#0052b4" d="M210 256h302v256H0z" />
      <Path fill="#eee" d="M0 0v512l256-256z" />
      <G fill="#ffda44">
        <Path d="M28 256a73.1 73.1 0 0 0-.2 5.6 72.3 72.3 0 1 0 144.5-5.6z" />
        <Circle cx={100.2} cy={200.3} r={22.3} />
      </G>
      <Path
        fill="#d80027"
        d="M50 194.8V267c0 38.4 50.2 50 50.2 50s50-11.6 50-50v-72.3h-100z"
      />
      <Path
        fill="#338af3"
        d="M100.2 294c-9.3-3.4-28-12-28-27v-50H128v50c0 15-18.6 23.6-27.8 26.9z"
      />
      <Path
        fill="#eee"
        d="M111.3 244.9v-11.2l-11.1-5.5-11.2 5.5V245l-5.5 5.5v22.3h33.4v-22.3z"
      />
    </G>
  </Svg>
);
export default SvgSx;
