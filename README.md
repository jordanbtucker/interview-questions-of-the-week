# Interview Questions of the Week

A repository of solutions to [Cassidy Williams'] Interview Questions of the Week
from her [newsletter], written in [TypeScript] and tested with [Deno].

## Project Structure

Each weekly issue of the newsletter has a number near the bottom, and each
interview question solution is in a file named after that number. For example,
the solution to the interview question in issue #280 can be found in `280.ts`.

Tests for each solution can be found in its corresponding `*_test.ts` file. For
example, the tests for the solution to the interview question in issue #280 can
be found in `280_test.ts`.

## Running the Tests

First install [Git] and [Deno].

Then clone this repository:

```
git clone https://github.com/jordanbtucker/interview-questions-of-the-week.git
cd interview-questions-of-the-week
```

To perform the tests, run:

```
deno test
```

[Cassidy Williams']: https://cassidoo.co/
[Deno]: https://deno.land/
[Git]: https://git-scm.com/
[newsletter]: https://cassidoo.co/newsletter/
[TypeScript]: https://www.typescriptlang.org/
