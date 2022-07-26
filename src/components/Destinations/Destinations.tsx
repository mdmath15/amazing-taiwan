import { useEffect, useState } from "react";

import { data } from "@/data";
import { useWindowSize } from "@/hooks/useWindowSize";

import { Button } from "../Button";
import { Carousel } from "../Carousel";
import { DestinationCard } from "../DestinationCard";
import * as S from "./Destinations.styles";

export function Destinations() {
  const { width } = useWindowSize();
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    if (width) {
      if (width < 700) {
        setCardsToShow(2);
        return;
      }
      if (width < 992) {
        setCardsToShow(3);
        return;
      }
      setCardsToShow(4);
    }
  }, [width]);

  return (
    <S.Container>
      <h1>Popular destinations in Taiwan</h1>
      <Carousel height={620} maxWidth={1280} gap={32} cardsToShow={cardsToShow}>
        {data.destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            title={destination.title}
            image={destination.image}
            destinations={destination.destinations}
            rating={destination.rating}
          />
        ))}
      </Carousel>
      <Button type="button" color="white" background="orange" withGlow>
        Show More
      </Button>
    </S.Container>
  );
}
