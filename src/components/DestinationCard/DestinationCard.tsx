import { Rating } from "react-simple-star-rating";

import Image from "next/image";

import * as S from "./DestinationCard.styles";

export interface DestinationCardProps {
  title: string;
  image: string;
  destinations: string;
  rating: number;
}

export function DestinationCard({
  title,
  image,
  destinations,
  rating,
}: DestinationCardProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={image} alt={title} width={278} height={424} />
      </S.ImageContainer>
      <S.Content>
        <h2>{title}</h2>
        <p>{destinations}</p>
        <Rating
          ratingValue={0}
          initialValue={rating}
          size={25}
          readonly
          allowHalfIcon
        />
      </S.Content>
    </S.Container>
  );
}
