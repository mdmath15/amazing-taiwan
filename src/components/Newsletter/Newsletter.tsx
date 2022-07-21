import { Button } from "../Button";
import * as S from "./Newsletter.styles";

export function Newsletter() {
  return (
    <S.Container>
      <section>
        <h1>Subscribe our newsletter</h1>
        <p>
          Receive latest news, update, and many other things every <br />
          week.
        </p>
        <S.InputContainer>
          <input type="text" placeholder="Your email here" />
          <Button background="blue" color="white" type="button">
            Join Now
          </Button>
        </S.InputContainer>
      </section>
    </S.Container>
  );
}
