import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { DestinationCard } from "./DestinationCard";

describe("DestinationCard", () => {
  it("should render DestinationCard", () => {
    render(
      <ThemeProvider theme={theme}>
        <DestinationCard
          destinations="Taipei"
          image="/images/Taipei.svg"
          rating={5}
          title="Taipei Destiny"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Taipei")).toBeInTheDocument();
  });
});
