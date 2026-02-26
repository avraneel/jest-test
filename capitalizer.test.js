// index.test.js

import { capitalize } from "./capitalizer";

test("capital test", () => {
  expect(capitalize("paris")).toBe("Paris");
});
