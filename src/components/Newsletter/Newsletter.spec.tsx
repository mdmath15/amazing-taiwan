import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";

import { Newsletter } from "./Newsletter";

describe("About Us", () => {
  it("should render Newsletter component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Newsletter />
      </ThemeProvider>
    );

    expect(screen.getByPlaceholderText("Your email here")).toBeInTheDocument();
  });

  it("should render Newsletter component with background image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Newsletter />
      </ThemeProvider>
    );

    const container = screen.getByTestId("container-img");

    expect(container).toBeInTheDocument();
    expect(container).toHaveStyle({
      backgroundImage: "url(/images/newsletter-image.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "130% 25%",
    });
  });
});
