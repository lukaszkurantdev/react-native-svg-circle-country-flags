import * as React from 'react';
import Svg, { Mask, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgYi = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="yi_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#yi_svg__a)">
      <Path
        fill="#eee"
        d="M0 0h512v56l-25 32 25 34v268l-26 36 26 30v56H0v-56l25-34-25-32V122l27-33L0 56z"
      />
      <Path fill="#333" d="M0 390v66h512v-66z" />
      <Circle cx={256} cy={186} r={104} fill="#333" />
      <Circle cx={256} cy={186} r={84} fill="#eee" />
      <Circle cx={256} cy={186} r={64} fill="#333" />
      <Circle cx={256} cy={186} r={44} fill="#eee" />
      <Path fill="#333" d="m246 319-49 11v14h118v-14l-49-11z" />
      <Path fill="#eee" d="M148 78h216v108H148z" />
      <Path
        fill="#333"
        d="M246 180h20v150h-20zm87-8h34l-7 15h-20zm-40 0h34l-7 15h-20zm-108 0h34l-7 15h-20zm-40 0h34l-7 15h-20z"
      />
      <Path fill="#333" d="M239 172h34l-7 15h-20zM0 56v66h512V56z" />
    </G>
  </Svg>
);
export default SvgYi;
