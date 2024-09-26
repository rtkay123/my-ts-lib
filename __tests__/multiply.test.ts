import { multiply, subtract } from "../src/index";

describe("Product", () => {
  test("multiply", () => {
    let output = multiply(2, 1);
    expect(output).toBe(2);
  });
});
