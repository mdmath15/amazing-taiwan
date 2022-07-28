import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";

import { AboutUs } from "./AboutUs";

describe("About Us", () => {
  it("should render AboutUs component", () => {
    render(
      <ThemeProvider theme={theme}>
        <AboutUs />
      </ThemeProvider>
    );

    const Title = screen.getByText("About Us");

    expect(Title).toBeInTheDocument();
  });

  it("should render AboutUs component with background image", () => {
    render(
      <ThemeProvider theme={theme}>
        <AboutUs />
      </ThemeProvider>
    );

    expect(screen.getByTestId("container-img")).toBeInTheDocument();
    expect(screen.getByTestId("container-img")).toHaveStyle({
      backgroundImage: "url(/images/about-us-image.svg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    });
  });

  it("should test if the accessibility component has the correct description", () => {
    render(
      <ThemeProvider theme={theme}>
        <AboutUs />
      </ThemeProvider>
    );

    const imgContainer = screen.getByTestId("container-img");
    const accessibilityElement = screen.getByLabelText(
      "A person looking for destinations on the board"
    );

    expect(imgContainer).toContainElement(accessibilityElement);
  });
});
