import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";

import { Reviews } from "./Reviews";

describe("About Us", () => {
  it("should render Reviews component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Reviews />
      </ThemeProvider>
    );

    expect(
      screen.getByText("Let’s see what other travellers say")
    ).toBeInTheDocument();
  });

  it("should render Reviews component with 3 childrens", () => {
    render(
      <ThemeProvider theme={theme}>
        <Reviews />
      </ThemeProvider>
    );

    expect(screen.getByTestId("container-reviews").children.length).toBe(3);
  });
});
