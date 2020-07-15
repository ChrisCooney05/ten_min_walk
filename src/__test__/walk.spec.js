const tenMinuteWalk = require("../walk");

describe("tenMinuteWalk", () => {
  test("It should return false if array length is under 10", () => {
    expect(tenMinuteWalk(["n"])).toEqual(false);
  });

  test("It should return true if the array length is exactly 10 long", () => {
    expect(
      tenMinuteWalk(["w", "s", "e", "e", "n", "n", "e", "s", "w", "w"])
    ).toEqual(true);
  });

  test("It should return true if length > 10 && x/y === 0", () => {
    expect(
      tenMinuteWalk(["w", "s", "e", "e", "n", "n", "e", "s", "w", "w"])
    ).toEqual(true);
  });

  test("It should return false if we dont get x == 0 && y === 0", () => {
    expect(
      tenMinuteWalk(["w", "s", "e", "n", "n", "e", "s", "w", "w", "w"])
    ).toEqual(false);
    expect(
      tenMinuteWalk(["w", "s", "e", "s", "s", "e", "s", "w", "n", "n"])
    ).toEqual(false);
  });
});
