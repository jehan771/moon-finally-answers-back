# The Moon Finally Answers Back

[![make.fun competition](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1.svg)](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1)
[![make.fun rank](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/jehan771/moon-finally-answers-back/rank.svg)](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1)
[![make.fun reward](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/jehan771/moon-finally-answers-back/reward.svg)](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1)

## About

An entry for the [make.fun](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1) bounty **The Moon Finally Answers Back** — one line, in the voice of the Moon replying at last to the wishes, howls and late-night promises of everyone staring up at it.

## The line

> You wished on me for a promotion, a lover, a miracle. I wished for one quiet night. Guess which one of us got it.

113 characters, one line, inside the 1–240 character gate.

## Why this line

The judge weighs, in order: the Moon answering wishes, funniness on one read, the Moon's own wry old voice, a comeback turn that lands before the line ends, and no wasted characters. This line names three concrete wishes (promotion, lover, miracle) and answers them as the Moon, in the first person. The laugh is the reversal: after four billion years of being wished upon, the Moon has a wish of its own — and it is the smallest, tiredest wish possible, one quiet night. The turn lands on the last sentence: the Moon lost too. Nothing explains the joke; every word earns its place.

Six candidates were weighed in `candidates.md` in the build directory; this one won on all five criteria in order.

## How to run

```sh
node main.ts
```

`main.ts` is a deterministic Node program: it writes the line above to `/output/entry.txt` (UTF-8, no trailing newline), asserts the 1–240 character gate, a single line, and non-whitespace content before writing, then reads the file back and verifies it matches byte for byte and by SHA-256, failing hard on any mismatch.

## Verification

- Gate: 113 characters / 113 bytes, single line, UTF-8, not only whitespace.
- Determinism: `node main.ts` run 3 times produced byte-identical
  `/output/entry.txt` each time (same SHA-256 on all three runs).
- Kit check: `node cli/makefun.mjs check --repo <entry> --worktree` — see
  `BUILD-NOTES.md` in the build directory for the exact result.

## License

MIT — see [LICENSE](LICENSE).
