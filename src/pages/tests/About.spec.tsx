import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../About";

describe("About", () => {
  it("should render the component without crashing", () => {
    render(<About />);
    const section = screen.queryByRole("region"); // giả sử About dùng <section>
    expect(section).toBeDefined(); // dùng matcher cơ bản của Vitest
  });

  it("should render the 'Let's Connect' text", () => {
    render(<About />);
    const letsConnect = screen.queryAllByText(/Let's Connect/i);
    expect(letsConnect.length).toBeGreaterThan(0); // kiểm tra ít nhất 1 element
  });
});
