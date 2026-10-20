export const USER_SHARE_BPS = 7000;
export const PLATFORM_SHARE_BPS = 3000;

export function splitCredits(totalCredits) {
  if (!Number.isSafeInteger(totalCredits) || totalCredits < 0) {
    throw new RangeError("Credits must be a non-negative safe integer.");
  }
  // Deterministic rounding: platform receives remainder, no fractional credits.
  const userCredits = Number((BigInt(totalCredits) * BigInt(USER_SHARE_BPS)) / 10000n);
  return { userCredits, platformCredits: totalCredits - userCredits };
}

export function awardDemoCredits({ optedIn, eligibleActions, creditsPerAction = 10 }) {
  if (typeof optedIn !== "boolean") throw new TypeError("optedIn must be a boolean.");
  if (!Number.isSafeInteger(eligibleActions) || eligibleActions < 0) {
    throw new RangeError("eligibleActions must be a non-negative safe integer.");
  }
  if (!Number.isSafeInteger(creditsPerAction) || creditsPerAction < 0) {
    throw new RangeError("creditsPerAction must be a non-negative safe integer.");
  }
  if (!optedIn) return { totalCredits: 0, userCredits: 0, platformCredits: 0 };
  const totalCredits = eligibleActions * creditsPerAction;
  if (!Number.isSafeInteger(totalCredits)) throw new RangeError("Credit total exceeds safe integer range.");
  return { totalCredits, ...splitCredits(totalCredits) };
}
