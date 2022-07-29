import Image from "next/image";

import * as S from "./Wave.styles";

interface WaveProps {
  wave: string;
  height: string | number;
  width: string | number;
}

export function Wave({ wave, height, width }: WaveProps) {
  return (
    <S.Container
      style={{
        position: "relative",
        objectFit: "cover",
      }}
    >
      <Image src={wave} width={width} height={height} layout="responsive" />
    </S.Container>
  );
}
