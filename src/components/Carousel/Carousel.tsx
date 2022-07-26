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
  widthCarousel?: number;
  widthChildrens?: number;
  qntChildrens?: number;
  qntBalls?: number[];
  maxWidthCarousel?: number;
}

interface CarouselParams {
  children: React.ReactNode;
  maxWidth?: number;
  height?: number;
  gap?: number;
  cardsToShow: number;
}

export function Carousel({
  children,
  maxWidth,
  height,
  gap,
  cardsToShow,
}: CarouselParams) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [stateCarousel, setStateCarousel] = useState<StateCaroselParams>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollSize = 278;

  const handleCarousel = useCallback(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;

      const balls = Math.round((carousel.children.length - 1) / cardsToShow);

      setStateCarousel({
        ...stateCarousel,
        widthCarousel: carousel.offsetWidth,
        qntBalls: new Array(balls).fill(0),
        widthChildrens: carousel.children.item(0)?.clientWidth,
        maxWidthCarousel:
          (carousel.children.length - 1) *
          carousel.children.item(0)?.clientWidth!,
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
          stateCarousel?.widthCarousel! + gap!);

      case "prev":
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
        return (carouselRef.current!.scrollLeft -=
          stateCarousel?.widthCarousel! + gap!);

      default:
        return null;
    }
  };

  useEffect(() => {
    handleCarousel();
  }, [handleCarousel]);

  return (
    <S.ContainerRelative max={maxWidth || stateCarousel?.maxWidthCarousel}>
      <S.Container ref={carouselRef} height={height} gap={gap}>
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
