/* eslint-disable react/require-default-props */
/* eslint-disable no-return-assign */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";

import { CaretLeft, CaretRight, Circle } from "phosphor-react";

import * as S from "./Carousel.styles";

interface StateCaroselParams {
  qntBalls?: number[] | undefined;
  width?: number | undefined;
}

interface CarouselParams {
  children: React.ReactNode;
  cardsToShow: number;
}

export function Carousel({ children, cardsToShow }: CarouselParams) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [stateCarousel, setStateCarousel] = useState<StateCaroselParams>();
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(carouselRef.current?.children[0].clientWidth * cardsToShow);

  const handleCarousel = useCallback(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;

      const balls = Math.round((carousel.children.length - 1) / cardsToShow);

      setStateCarousel({
        ...stateCarousel,
        qntBalls: new Array(balls).fill(0),
        width: carousel.children[0].clientWidth * cardsToShow + 60,
      });
    }
  }, [setStateCarousel, cardsToShow]);

  const handleCarouselAction = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    switch (e.currentTarget.id) {
      case "next":
        if (currentIndex < stateCarousel?.qntBalls?.length! - 1) {
          setCurrentIndex(currentIndex + 1);
        }
        return (carouselRef.current!.scrollLeft +=
          carouselRef.current!.offsetWidth);

      case "prev":
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
        return (carouselRef.current!.scrollLeft -=
          carouselRef.current!.offsetWidth);

      default:
        return null;
    }
  };

  useEffect(() => {
    handleCarousel();
  }, [handleCarousel]);

  return (
    <S.ContainerRelative>
      <S.Container ref={carouselRef} width={stateCarousel?.width!}>
        {children}
        <div className="buttons">
          <button
            type="button"
            onClick={handleCarouselAction}
            id="prev"
            className="prev"
          >
            <CaretLeft size={32} color="white" />
          </button>
          <S.BallsContainer>
            {stateCarousel?.qntBalls!.map((item, index) => (
              <S.Balls key={index} active={currentIndex === index}>
                <Circle size={20} weight="fill" />
              </S.Balls>
            ))}
          </S.BallsContainer>
          <button
            type="button"
            onClick={handleCarouselAction}
            id="next"
            className="next"
          >
            <CaretRight size={32} color="white" />
          </button>
        </div>
      </S.Container>
    </S.ContainerRelative>
  );
}
