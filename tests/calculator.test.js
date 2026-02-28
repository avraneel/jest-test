import { calculator } from "../src/calculator";

test("calculator test", () => {
  expect(calculator.add(3, 4)).toBe(7);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.multiply(5, 6)).toBe(30);
});
