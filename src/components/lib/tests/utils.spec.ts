import { describe, it, expect } from "vitest";
import { cn } from "../utils";

describe("cn function", () => {
  it("should combine classes correctly", () => {
    expect(cn("text-sm", "font-bold")).toBe("text-sm font-bold");
  });

  it("should ignore falsy values", () => {
    expect(cn("text-sm", undefined, null, false, "font-bold")).toBe("text-sm font-bold");
  });

  it("should override classes with the same group prefix", () => {
    expect(cn("text-sm", "text-lg", "font-bold", "font-light")).toBe("text-lg font-light");
  });

  it("should return empty string if no valid classes", () => {
    expect(cn(undefined, null, false)).toBe("");
  });
});
