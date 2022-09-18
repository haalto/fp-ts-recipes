import { flow } from "fp-ts/lib/function";
import * as t from "io-ts";
import * as E from "fp-ts/lib/Either";
import * as TE from "fp-ts/lib/TaskEither";
import { failure } from "io-ts/lib/PathReporter";

export const person = t.type({
  name: t.string,
});

export type Person = t.TypeOf<typeof person>;

export const decodeWith = <A>(decoder: t.Decoder<unknown, A>) =>
  flow(
    decoder.decode,
    E.mapLeft((errors) => new Error(failure(errors).join("\n")))
  );
