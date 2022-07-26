import { useWindowSize } from "@/hooks/useWindowSize";

import { Button } from "../Button";
import * as S from "./Newsletter.styles";

export function Newsletter() {
  const { width } = useWindowSize();
  return (
    <S.Container>
      <section>
        <h1>Subscribe our newsletter</h1>
        <p>
          Receive latest news, update, and many other things every
          {width! > 600 && <br />}
          week.
        </p>
        <S.InputContainer>
          <input type="text" placeholder="Your email here" />
          <Button
            background={width! > 550 ? "blue" : "orange"}
            color="white"
            type="button"
          >
            Join Now
          </Button>
        </S.InputContainer>
      </section>
    </S.Container>
  );
}
