import { reverser } from "./reverser";

test("reverse test", () => {
  expect(reverser("palindrome")).toBe("emordnilap");
  expect("Malayalam").toBe("Malayalam");
});
