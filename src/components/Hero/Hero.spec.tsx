import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";

import { Hero } from "./Hero";

describe("About Us", () => {
  it("should render Hero component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Hero />
      </ThemeProvider>
    );

    const Title = screen.getByText("Discover your next", {exact: false});

    expect(Title).toBeInTheDocument();
  });

  it("should render Hero component with background image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Hero />
      </ThemeProvider>
    );

    const ImageContainer = screen.getByTestId("container-img");

    expect(ImageContainer).toBeInTheDocument();
    expect(ImageContainer).toHaveStyle({
      backgroundImage: "url(/images/hero-image.svg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    });
  });

  it("should test if the accessibility component has the correct description", () => {
    render(
      <ThemeProvider theme={theme}>
        <Hero />
      </ThemeProvider>
    );

    const imgContainer = screen.getByTestId("container-img");
    const accessibilityElement = screen.getByLabelText(
      "Two people taking a photo of destination in Taiwan"
    );

    expect(imgContainer).toContainElement(accessibilityElement);
  });
});
