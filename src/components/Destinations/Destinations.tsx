import { useEffect, useState } from "react";

import { data } from "@/data";
import { useWindowSize } from "@/hooks/useWindowSize";

import { Button } from "../Button";
import { Carousel } from "../Carousel";
import { DestinationCard } from "../DestinationCard";
import { Wave } from "../Wave";
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
    <>
      <Wave wave="/images/wave-top.svg" width="1440" height="131" />
      <S.Container>
        <S.Content>
          <h1>Popular destinations in Taiwan</h1>
          <Carousel cardsToShow={cardsToShow}>
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
        </S.Content>
      </S.Container>
      <Wave wave="/images/wave-bottom.svg" width="1440" height={207} />
    </>
  );
}
