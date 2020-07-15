const tenMinuteWalk = require("../walk");

describe("tenMinuteWalk", () => {
  test("It should return false if array length is under 10", () => {
    expect(tenMinuteWalk(["n"])).toEqual(false);
  });
});
