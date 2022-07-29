import * as S from "./AboutUs.styles";

export function AboutUs() {
  return (
    <>
      <S.Title>About Us</S.Title>
      <S.Container>
        <S.Content>
          <p className="first">
            <span>Amazing Taiwan</span> is travel guidance platform,
            <br />
            helps hundreds of thousands of people each month,
            <br />
            become <strong>better travelers</strong>.
          </p>
          <p className="second">
            Travelers across the globe use the Amazing Taiwan site
            <br /> to discover where to visit, based on guidance
            <br /> from those who have been there before.
          </p>
          <p className="tirdy">
            As a travel guidance company, Amazing Taiwan
            <br /> makes planning easy no matter the trip type.
          </p>
        </S.Content>
        <S.ImageWrapper data-testid="container-img">
          <span
            role="img"
            aria-label="A person looking for destinations on the board"
          />
        </S.ImageWrapper>
      </S.Container>
    </>
  );
}
