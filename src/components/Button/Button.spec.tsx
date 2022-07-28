import { Button } from "@/components";
import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Button", () => {
  it("should render Button", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button background="orange" color="white">
          Test
        </Button>
      </ThemeProvider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should render Button with background orange", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button background="orange" color="white">
          Test
        </Button>
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: theme.colors.orange,
      color: theme.colors.white,
    });
  });

  it("should render Button with background blue", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button background="blue" color="white">
          Test
        </Button>
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundColor: theme.colors.darkBlue,
      color: theme.colors.white,
    });
  });
});
