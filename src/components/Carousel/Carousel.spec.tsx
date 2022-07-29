import { userEvent } from "@storybook/testing-library";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { DestinationCard } from "../DestinationCard";
import { Carousel } from "./Carousel";

describe("Carousel", () => {
  it("should render Carousel component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Carousel cardsToShow={4}>
          <DestinationCard
            destinations="Brasil"
            image="/image/Taipei.svg"
            rating={4.5}
            title="Taipei"
          />
        </Carousel>
      </ThemeProvider>
    );
    const carousel = screen.getByTestId("carousel-container");
    expect(carousel).toBeInTheDocument();
  });

  it("should render Carousel component with 6 children", () => {
    const data = [1, 2, 3, 4, 5, 6];
    render(
      <ThemeProvider theme={theme}>
        <Carousel cardsToShow={4}>
          {data.map((item) => {
            return (
              <DestinationCard
                key={item}
                destinations="any_destination"
                image="/image/Taipei.svg"
                rating={5}
                title="any_title"
                data-testid="destination-card"
              />
            );
          })}
        </Carousel>
      </ThemeProvider>
    );
    const carousel = screen.getByTestId("childrens-container");
    expect(carousel.children.length).toBe(7);
    expect(carousel.children.length).not.toBe(6);
  });

  it("should render Carousel component have 2 balls", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    render(
      <ThemeProvider theme={theme}>
        <Carousel cardsToShow={4}>
          {data.map((item) => {
            return (
              <DestinationCard
                key={item}
                destinations="any_destination"
                image="/images/Taipei.svg"
                rating={5}
                title="any_title"
                data-testid="destination-card"
              />
            );
          })}
        </Carousel>
      </ThemeProvider>
    );
    const balls = screen.getByTestId("balls-container");
    expect(balls.children.length).toBe(2);
  });
});
