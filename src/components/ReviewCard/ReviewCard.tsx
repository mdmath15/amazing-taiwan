import { Rating } from "react-simple-star-rating";

import Image from "next/image";

import { useWindowSize } from "@/hooks/useWindowSize";

import * as S from "./ReviewCard.styles";

export interface TestimonialCardProps {
  destination: string;
  rating: number;
  comment: string;
  author: string;
  avatar: string;
}

export function ReviewCard({
  destination,
  rating,
  comment,
  author,
  avatar,
}: TestimonialCardProps) {
  const { width } = useWindowSize();
  return (
    <S.Container>
      <Image src={avatar} alt="Avatar" width={66} height={66} layout="fixed" />
      <div>
        <h2>{destination}</h2>
        <Rating
          ratingValue={0}
          initialValue={rating}
          size={width! < 1220 ? 20 : 24}
          readonly
          allowHalfIcon
        />
        <p>{comment}</p>
        <S.AuthorName>{author}</S.AuthorName>
      </div>
    </S.Container>
  );
}
