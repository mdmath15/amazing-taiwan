import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("should render Footer", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );

    expect(screen.getByAltText("Amazing Taiwan")).toBeInTheDocument();
    expect(screen.getByText("Terms and Conditions")).toBeInTheDocument();
  });
});
