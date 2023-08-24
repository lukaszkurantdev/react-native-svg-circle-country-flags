import * as React from 'react';
import Svg, { Mask, Circle, G, Path, Ellipse, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEs = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
    <Mask id="es_svg__a">
      <Circle cx={256} cy={256} r={256} fill="#fff" />
    </Mask>
    <G mask="url(#es_svg__a)">
      <Path fill="#ffda44" d="m0 128 256-32 256 32v256l-256 32L0 384Z" />
      <Path fill="#d80027" d="M0 0h512v128H0zm0 384h512v128H0z" />
      <G fill="#eee">
        <Path d="M144 304h-16v-80h16zm128 0h16v-80h-16z" />
        <Ellipse cx={208} cy={296} rx={48} ry={32} />
      </G>
      <G fill="#d80027">
        <Rect width={16} height={24} x={128} y={192} rx={8} />
        <Rect width={16} height={24} x={272} y={192} rx={8} />
        <Path d="M208 272v24a24 24 0 0 0 24 24 24 24 0 0 0 24-24v-24h-24z" />
      </G>
      <Rect width={32} height={16} x={120} y={208} fill="#ff9811" ry={8} />
      <Rect width={32} height={16} x={264} y={208} fill="#ff9811" ry={8} />
      <Rect width={32} height={16} x={120} y={304} fill="#ff9811" rx={8} />
      <Rect width={32} height={16} x={264} y={304} fill="#ff9811" rx={8} />
      <Path
        fill="#ff9811"
        d="M160 272v24c0 8 4 14 9 19l5-6 5 10a21 21 0 0 0 10 0l5-10 5 6c6-5 9-11 9-19v-24h-9l-5 8-5-8h-10l-5 8-5-8z"
      />
      <Path d="M122 252h172m-172 24h28m116 0h28" />
      <Path
        fill="#d80027"
        d="M122 248a4 4 0 0 0-4 4 4 4 0 0 0 4 4h172a4 4 0 0 0 4-4 4 4 0 0 0-4-4zm0 24a4 4 0 0 0-4 4 4 4 0 0 0 4 4h28a4 4 0 0 0 4-4 4 4 0 0 0-4-4zm144 0a4 4 0 0 0-4 4 4 4 0 0 0 4 4h28a4 4 0 0 0 4-4 4 4 0 0 0-4-4z"
      />
      <Path
        fill="#eee"
        d="M196 168c-7 0-13 5-15 11l-5-1c-9 0-16 7-16 16s7 16 16 16c7 0 13-4 15-11a16 16 0 0 0 17-4 16 16 0 0 0 17 4 16 16 0 1 0 10-20 16 16 0 0 0-27-5c-3-4-7-6-12-6zm0 8c5 0 8 4 8 8 0 5-3 8-8 8-4 0-8-3-8-8 0-4 4-8 8-8zm24 0c5 0 8 4 8 8 0 5-3 8-8 8-4 0-8-3-8-8 0-4 4-8 8-8zm-44 10 4 1 4 8c0 4-4 7-8 7s-8-3-8-8c0-4 4-8 8-8zm64 0c5 0 8 4 8 8 0 5-3 8-8 8-4 0-8-3-8-7l4-8z"
      />
      <Path fill="none" d="M220 284v12c0 7 5 12 12 12s12-5 12-12v-12z" />
      <Path fill="#ff9811" d="M200 160h16v32h-16z" />
      <Path fill="#eee" d="M208 224h48v48h-48z" />
      <Path
        fill="#d80027"
        d="m248 208-8 8h-64l-8-8c0-13 18-24 40-24s40 11 40 24zm-88 16h48v48h-48z"
      />
      <Rect
        width={20}
        height={32}
        x={222}
        y={232}
        fill="#d80027"
        rx={10}
        ry={10}
      />
      <Path
        fill="#ff9811"
        d="M168 232v8h8v16h-8v8h32v-8h-8v-16h8v-8zm8-16h64v8h-64z"
      />
      <G fill="#ffda44">
        <Circle cx={186} cy={202} r={6} />
        <Circle cx={208} cy={202} r={6} />
        <Circle cx={230} cy={202} r={6} />
      </G>
      <Path
        fill="#d80027"
        d="M169 272v43a24 24 0 0 0 10 4v-47h-10zm20 0v47a24 24 0 0 0 10-4v-43h-10z"
      />
      <G fill="#338af3">
        <Circle cx={208} cy={272} r={16} />
        <Rect width={32} height={16} x={264} y={320} ry={8} />
        <Rect width={32} height={16} x={120} y={320} ry={8} />
      </G>
    </G>
  </Svg>
);
export default SvgEs;
