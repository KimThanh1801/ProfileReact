import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "../Header";

describe("Header", () => {
  it("should render the logo", () => {
    render(<Header />);
    const logos = screen.getAllByText("Studio");
    expect(logos.length > 0).toEqual(true);
  });

  it("should render navigation links", () => {
    render(<Header />);
    const navLinks = ["Home", "About", "Projects", "Skills"];
    navLinks.forEach((text) => {
      const elements = screen.getAllByText(text);
      expect(elements.length > 0).toEqual(true);
    });

    const contactElements = screen.getAllByText("Contact");
    expect(contactElements.length >= 2).toEqual(true);
  });
});
