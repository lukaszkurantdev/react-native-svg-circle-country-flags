import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgJollyRoger = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="jolly_roger_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#jolly_roger_svg__a)">
      <Path fill="#333" d="M0 0h512v512H0Z" />
      <Path
        fill="#eee"
        d="M368 109c-10-1-18 7-18 17 0 5 2 11 6 14l-17 17 17 16 16-17c4 4 9 6 14 6 10 0 18-8 17-18 1-10-7-18-17-18 0-10-8-18-18-17zm-16 226-17 16 21 21c-4 4-6 9-6 14 0 10 8 18 18 17 10 1 18-7 18-17 10 0 18-8 17-18 1-10-7-18-17-18-5 0-10 2-14 6zm-96-185c-59 0-106 48-106 106v41s14 8 36 29c21 22 29 36 29 36h82s8-14 29-36c22-21 36-29 36-29v-41c0-58-47-106-106-106Z"
      />
      <Circle cx={206} cy={267.7} r={35.3} fill="#333" />
      <Circle cx={306} cy={267.7} r={35.3} fill="#333" />
      <Path
        fill="#eee"
        d="M144 109c10-1 18 7 18 17 0 5-2 11-6 14l17 17-17 16-16-17c-4 4-9 6-14 6-10 0-18-8-17-18-1-10 7-18 17-18 0-10 8-18 18-17zm16 226 17 16-21 21c4 4 6 9 6 14 0 10-8 18-18 17-10 1-18-7-18-17-10 0-18-8-17-18-1-10 7-18 17-18 5 0 10 2 14 6z"
      />
      <Path
        fill="#333"
        d="M256 293a8 8 0 0 0-7 4l-13 20a8 8 0 0 0 7 12h26a8 8 0 0 0 7-12l-13-20a8 8 0 0 0-7-4Z"
      />
    </G>
  </Svg>
);
export default SvgJollyRoger;
