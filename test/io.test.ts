import * as E from "fp-ts/lib/Either";
import { decodeWith, person } from "../src/io";

describe("io-ts examples", () => {
  it("should decode unkown to person", async () => {
    const personData = {
      name: "John",
    };
    const result = await decodeWith(person)(personData)();
    expect(result).toEqual(E.right(personData));
  });

  it("should fail to decode unkown to person when name is wrong type", async () => {
    const personData = {
      name: 1,
    };
    const result = await decodeWith(person)(personData)();
    expect(E.isLeft(result)).toBe(true);
  });

  it("should fail to decode unkown to person when name is missing", async () => {
    const personData = {
      age: 1,
    };
    const result = await decodeWith(person)(personData)();
    expect(E.isLeft(result)).toBe(true);
  });
});
