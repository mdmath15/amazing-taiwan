import { Button } from "../Button";
import { Wave } from "../Wave";
import * as S from "./Hero.styles";

export function Hero() {
  return (
    <>
      <S.Container>
        <S.Content>
          <h1>
            Discover your next <br /> place to travel <br /> in Taiwan
          </h1>
          <p>
            Since 2020, we’ve guided more than
            <br /> 100.000 people to enjoy their best
            <br /> <strong>Taiwan Experience</strong>
          </p>
          <Button type="button" background="orange" color="white" withGlow>
            Let&apos;s Explore
          </Button>
        </S.Content>
        <S.ImageWrapper>
          <span
            role="img"
            aria-label="Two people taking a photo of destination in Taiwan"
          />
        </S.ImageWrapper>
      </S.Container>
      <Wave wave="/images/wave-top.svg" width="1440" height="131" />
    </>
  );
}
