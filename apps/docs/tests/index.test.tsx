import { render } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Home", () => {
  it("renders page", () => {
    // arrange
    const { getByRole } = render(<Home />);

    // act
    const heading = getByRole("heading");

    // assert
    expect(heading).toHaveTextContent("Docs");
  });
});
