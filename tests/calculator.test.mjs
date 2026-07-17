import test from "node:test";
import assert from "node:assert/strict";

import {
  calculateEstimate,
  calculateLineItem,
  roundTo,
  toNonNegativeNumber,
} from "../calculator.mjs";

test("combines word, minute, and hourly services with profit", () => {
  const result = calculateEstimate({
    services: [
      { name: "Translation", rate: 0.055, quantity: 1000 },
      { name: "Transcription", rate: 0.1, quantity: 20 },
      { name: "Design", rate: 20, quantity: 5 },
      { name: "Development", rate: 20, quantity: 5 },
      { name: "Meeting", rate: 30, quantity: 1 },
    ],
    profitMarginPercent: 30,
  });

  assert.deepEqual(
    { cost: result.cost, profit: result.profit, estimate: result.estimate },
    { cost: 287, profit: 86.1, estimate: 373.1 },
  );
});

test("rounds each line item to cents before totaling", () => {
  const item = calculateLineItem({ name: "Editing", rate: 0.015, quantity: 333 });
  assert.equal(item.cost, 5);
  assert.equal(roundTo(1.005), 1.01);
});

test("normalizes invalid and negative values to zero", () => {
  assert.equal(toNonNegativeNumber(-10), 0);
  assert.equal(toNonNegativeNumber("not-a-number"), 0);

  const result = calculateEstimate({
    services: [{ name: "Design", rate: -20, quantity: 5 }],
    profitMarginPercent: -30,
  });
  assert.deepEqual(
    { cost: result.cost, profit: result.profit, estimate: result.estimate },
    { cost: 0, profit: 0, estimate: 0 },
  );
});

test("supports a zero-margin estimate", () => {
  const result = calculateEstimate({
    services: [{ name: "Meeting", rate: 40, quantity: 1.5 }],
    profitMarginPercent: 0,
  });
  assert.equal(result.cost, 60);
  assert.equal(result.profit, 0);
  assert.equal(result.estimate, 60);
});
