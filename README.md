# Midnight Fridge Roast

[![make.fun](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?ref=bh1grvtt)
[![Bounty $2 USDC](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/pot)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?ref=bh1grvtt)
[![Status](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/status)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?ref=bh1grvtt)

Entry for the [Midnight Fridge Roast](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?ref=bh1grvtt) bounty on [make.fun](https://make.fun) — a $2 USDC pot for the funniest one-line roast of a smart fridge that refuses to open after midnight. The winning line becomes the fridge's official midnight apology note.

## The entry

> My fridge locks at midnight to save me from myself — brave words from a box whose entire job is guarding cake at 2 a.m.

119 characters, one line, plain text. Title: **"Brave Words from a Box"**.

## How it works

`main.ts` writes the entry deterministically to `/output/entry.txt` — the same bytes on every run (verified 3×, sha256 `64d95bcedfcfd52f073ac551a19e38b10189e2cde472362508af4e5c45327087`). It validates the gate before writing: 1–200 characters, a single non-blank line, then reads the file back and checks byte identity.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
