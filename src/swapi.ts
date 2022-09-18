import { pipe } from "fp-ts/lib/function";
import * as TE from "fp-ts/lib/TaskEither";
import { get } from "./http";
import { decodeWith, Person, person } from "./io";

export const getPersonById = (id: number): TE.TaskEither<Error, Person> =>
  pipe(
    get(`https://swapi.dev/api/people/${id}`),
    TE.map((response) => response.data),
    TE.chain((d) => TE.fromEither(decodeWith(person)(d)))
  );
