import { main } from "../src";

describe("Simple node script template", () => {
  it("should return 1", () => {
    const result = main();
    expect(result).toBe(1);
  });
});
