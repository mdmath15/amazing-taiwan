import { theme } from "@styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { ReviewCard } from "./ReviewCard";

describe("ReviewCard", () => {
  it("should render ReviewCard", () => {
    render(
      <ThemeProvider theme={theme}>
        <ReviewCard
          author="Test"
          comment="Comment Test"
          rating={5}
          destination="Destination Test"
          avatar="/images/avatar1.svg"
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
