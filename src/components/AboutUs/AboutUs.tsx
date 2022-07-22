import { Wave } from "../Wave";
import * as S from "./AboutUs.styles";

export function AboutUs() {
  return (
    <>
      <Wave wave="/images/wave-bottom.svg" width="1440" height={207} />
      <S.Container>
        <h1>About Us</h1>
        <section>
          <p>
            <span>Amazing Taiwan</span> is travel guidance platform,
            <br />
            helps hundreds of thousands of people each month,
            <br />
            become <strong>better travelers</strong>.
          </p>
          <p>
            Travelers across the globe use the Amazing Taiwan site
            <br /> to discover where to visit, based on guidance
            <br /> from those who have been there before.
          </p>
          <p>
            As a travel guidance company, Amazing Taiwan
            <br /> makes planning easy no matter the trip type.
          </p>
        </section>
      </S.Container>
    </>
  );
}
