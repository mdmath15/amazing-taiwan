import { data } from "@/data";

import { Button } from "../Button";
import { Carousel } from "../Carousel";
import { DestinationCard } from "../DestinationCard";
import * as S from "./Destinations.styles";

export function Destinations() {
  return (
    <S.Container>
      <h1>Popular destinations in Taiwan</h1>
      <Carousel maxWidth={1280} height={620} gap={32}>
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
