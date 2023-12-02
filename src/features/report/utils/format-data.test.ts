// format-date.test.ts
import { expect, test } from "vitest";
import { formatDate } from "./format-date";

// Example date: January 1, 2020, 15:30:45
test("Format date with time, da-DA locale", () => {
  const d = new Date("2020-01-01T15:30:45");
  const exp = "1.1.2020 15.30.45"; // FIXME: should be 15:30:45
  const res = formatDate(d);
  expect(res).toBe(exp);
});

// Example date: January 1, 2020, 15:30:45
test("Format date without time, da-DA locale", () => {
  const d = new Date("2020-01-01");
  const exp = "1.1.2020 01.00.00";
  const res = formatDate(d);
  expect(res).toBe(exp);
});
