import { Header } from "@/components";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Header Test", () => {
  it("should render Header", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByTestId("open-menu")).toHaveStyle("display: none");
  });

  it("should render Header with logo", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByAltText("Amazing Taiwan")).toBeInTheDocument();
    expect(screen.getByTestId("open-menu")).toHaveStyle("display: none");
  });

  it("should render Header mobile", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId("open-menu")).toBeInTheDocument();
  });
});
