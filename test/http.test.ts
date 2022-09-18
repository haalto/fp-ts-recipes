import * as E from "fp-ts/lib/Either";
import * as TE from "fp-ts/lib/TaskEither";
import { get, getPersonById } from "../src/http";
import { Person } from "../src/io";

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

  it("returns a person from getPersonById with id being 1", async () => {
    const person: E.Either<Error, Person> = await getPersonById(1)();
    expect(E.isRight(person)).toBe(true);
    if (E.isRight(person)) {
      expect(person.right.name).toBe("Luke Skywalker");
    }
  });
});
