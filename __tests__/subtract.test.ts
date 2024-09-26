import { subtract } from "../src/index";

describe("Arithmetic", () => {
  test("subtract", () => {
    let output = subtract(2, 1);
    expect(output).toBe(1);
  });
});
