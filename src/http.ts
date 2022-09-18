import axios, { AxiosResponse } from "axios";
import { toError } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { of } from "fp-ts/lib/ReaderT";
import * as TE from "fp-ts/lib/TaskEither";
import { decodeWith, person, Person } from "./io";

export const get = (url: string): TE.TaskEither<Error, AxiosResponse> =>
  TE.tryCatch(() => axios.get(url), toError);

export const getPersonById = (id: number) =>
  pipe(
    get(`https://swapi.dev/api/people/${id}`),
    TE.map((response) => response.data),
    TE.chain(decodeWith(person))
  );
