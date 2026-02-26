// index.test.js

import { capitalize } from ".";

test("capital test", () => {
  expect(capitalize("paris")).toBe("Paris");
});
