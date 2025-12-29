import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Footer from "../Footer";

describe("Footer", () => {
  it("should render the logo", () => {
    render(<Footer />);
    const logo = screen.getAllByText("Portfolio")[0];
    expect(logo).not.toBeNull();
  });

  it("should render the quick links", () => {
    render(<Footer />);
    const links = ["Home", "About", "Projects", "Skills", "Contact"];
    links.forEach((text) => {
      const el = screen.getAllByText(text)[0];
      expect(el).not.toBeNull();
    });
  });

  it("should render the social links", () => {
    render(<Footer />);
    ["LinkedIn", "GitHub", "Twitter", "Email"].forEach((label) => {
      const el = screen.getAllByLabelText(label)[0];
      expect(el).not.toBeNull();
    });
  });

  it("should render the copyright notice", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const el = screen.getAllByText(`© ${currentYear} React Developer. All rights reserved.`)[0];
    expect(el).not.toBeNull();
  });

  it('should render the "Back to top" button', () => {
    render(<Footer />);
    const el = screen.getAllByText("Back to top")[0];
    expect(el).not.toBeNull();
  });

  it('clicking the "Back to top" button should scroll the window to the top', () => {
    window.scrollTo = vi.fn();
    render(<Footer />);
    const el = screen.getAllByText("Back to top")[0];
    fireEvent.click(el);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
