import axios, { AxiosResponse } from "axios";
import { toError } from "fp-ts/lib/Either";
import * as TE from "fp-ts/lib/TaskEither";

export const get = (url: string): TE.TaskEither<Error, AxiosResponse> =>
  TE.tryCatch(() => axios.get(url), toError);
