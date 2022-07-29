import { data } from "../../data/data";
import { ReviewCard } from "../ReviewCard";
import * as S from "./Reviews.styles";

export function Reviews() {
  return (
    <S.Container id="reviews">
      <section>
        <h1>Let’s see what other travellers say</h1>
        <S.Wrapper>
          {data.reviews.map((review) => (
            <ReviewCard
              key={review.id}
              avatar={review.avatar}
              author={review.author}
              comment={review.comment}
              destination={review.destination}
              rating={review.rating}
            />
          ))}
        </S.Wrapper>
      </section>
    </S.Container>
  );
}
