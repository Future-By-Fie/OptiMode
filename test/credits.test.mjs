import test from "node:test";
import assert from "node:assert/strict";
import { splitCredits, awardDemoCredits } from "../src/credits.mjs";

test("70/30 allocation preserves all integer credits", () => {
  assert.deepEqual(splitCredits(100), { userCredits: 70, platformCredits: 30 });
  assert.deepEqual(splitCredits(1), { userCredits: 0, platformCredits: 1 });
  for (const total of [0, 3, 7, 10, 101, 999]) {
    const { userCredits, platformCredits } = splitCredits(total);
    assert.equal(userCredits + platformCredits, total);
  }
});
test("participation is explicitly optional", () => {
  assert.deepEqual(awardDemoCredits({ optedIn: false, eligibleActions: 9 }), {
    totalCredits: 0, userCredits: 0, platformCredits: 0,
  });
  assert.deepEqual(awardDemoCredits({ optedIn: true, eligibleActions: 3 }), {
    totalCredits: 30, userCredits: 21, platformCredits: 9,
  });
});
test("rejects negative, fractional and unsafe inputs", () => {
  for (const value of [-1, 1.5, Number.NaN, Number.MAX_SAFE_INTEGER + 1]) {
    assert.throws(() => splitCredits(value), RangeError);
  }
  assert.throws(() => awardDemoCredits({ optedIn: true, eligibleActions: -1 }), RangeError);
  assert.throws(() => awardDemoCredits({ optedIn: true, eligibleActions: 10, creditsPerAction: 1.5 }), RangeError);
  assert.throws(() => awardDemoCredits({ optedIn: "yes", eligibleActions: 1 }), TypeError);
});
