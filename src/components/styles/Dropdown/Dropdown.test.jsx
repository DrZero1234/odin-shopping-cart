import { describe, expect, it } from "vitest";
import { StyledDropdown } from "./Dropdown.styles";
import { render, screen } from "@testing-library/react";

describe("Testing Dropdown component", () => {
  it("Rednering the Dropdown component", async () => {
    render(<StyledDropdown list={["lel", "kek"]} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
