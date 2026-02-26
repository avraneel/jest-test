// index.test.js

import { capitalize } from "../src/capitalizer";

test("capital test", () => {
  expect(capitalize("paris")).toBe("Paris");
});
