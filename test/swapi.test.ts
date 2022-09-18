import { Person } from "../src/io";
import { getPersonById } from "../src/swapi";
import * as E from "fp-ts/lib/Either";

describe("swapi recipes", () => {
  it("returns a person from getPersonById with id being 1", async () => {
    const person: E.Either<Error, Person> = await getPersonById(1)();
    expect(E.isRight(person)).toBe(true);
    if (E.isRight(person)) {
      expect(person.right.name).toBe("Luke Skywalker");
    }
  });

  it("returns error when calling with bad id", async () => {
    const person: E.Either<Error, Person> = await getPersonById(0)();
    expect(E.isLeft(person)).toBe(true);
  });
});
