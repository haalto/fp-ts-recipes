import * as E from "fp-ts/lib/Either";
import { get } from "../src/http";

describe("http request recipes", () => {
  it("returns a TaskEither with a successful Axios response", async () => {
    const response = await get("https://httpstat.us/200")();
    expect(E.isRight(response)).toBe(true);

    if (E.isRight(response)) {
      expect(response.right.status).toBe(200);
    }
  });

  it("returns a TaskEither with an error", async () => {
    const response = await get("https://httpstat.us/500")();
    expect(E.isLeft(response)).toBe(true);
  });
});
