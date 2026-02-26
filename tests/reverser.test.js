import { reverser } from "../src/reverser";

test("reverse test", () => {
  expect(reverser("palindrome")).toBe("emordnilap");
  expect("Malayalam").toBe("Malayalam");
});
