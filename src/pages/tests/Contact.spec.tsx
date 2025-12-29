import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Contact from "../Contact";

describe("Contact", () => {
  it("should render the component without crashing", () => {
    render(<Contact />);
  });

  it("should submit the form with the correct data", () => {
    const consoleSpy = vi.spyOn(console, "log");
    render(<Contact />);

    const nameInput = screen.getAllByPlaceholderText("Your name")[0];
    const emailInput = screen.getAllByPlaceholderText("your@email.com")[0];
    const messageInput = screen.getAllByPlaceholderText("Your message here...")[0];

    const submitButton = screen.getAllByText("Send Message")[0];
    fireEvent.click(submitButton);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(messageInput, { target: { value: "This is a test message" } });

    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith("Form submitted:", {
      name: "John Doe",
      email: "john.doe@example.com",
      message: "This is a test message",
    });
  });
});
