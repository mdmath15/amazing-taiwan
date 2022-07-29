import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Destinations } from "./Destinations";

describe("Destintions", () => {
  it("should render Destinations", () => {
    render(
      <ThemeProvider theme={theme}>
        <Destinations />
      </ThemeProvider>
    );

    expect(
      screen.getByText("Popular destinations in Taiwan")
    ).toBeInTheDocument();
  });
});
