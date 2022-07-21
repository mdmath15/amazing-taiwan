import { Button } from "../Button";
import * as S from "./Hero.styles";

export function Hero() {
  return (
    <S.Container>
      <section>
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
      </section>
    </S.Container>
  );
}
