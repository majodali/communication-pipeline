# Analysis: the 232 findings of the ten rounds on methodology PR #51

Reader: RD-1 (the human owner), who asked on 2026-10-26 which findings
indicated issues with the IR, which with the text, which could be
resolved by reducing words, which required adding words, and which
responses introduced further problems. Data: `pr51-findings.csv`, one
row per finding, with the reviewer's columns and five added by the
reasoning role.

## Method

- Source: the ten reviewer reports, extracted from the session log.
- Origin: each finding's quoted text was searched in the eleven
  snapshots of the specification (before round 1, after each round's
  fixes). The first snapshot holding it is the origin: pre-existing
  text (in the specification before the amendment), the amendment's
  draft, or the fix of round k.
- Locus: claim-level (the finding is about what a passage states:
  scope, actor, test, an unclassified case, a contradiction, an
  undefined term) or rendering (referents, sentence form, length,
  placement, links, provenance placement). Assigned by rule.
- Judgement: the reasoning role read all 147 claim-level findings and
  sorted them into substantive (a gap or contradiction a reader would
  hit in ordinary use), edge-case elaboration (a case a default
  clause covers), wording (a name or phrase), and test demand (a
  check the corpus's own rules do not require). The 85 rendering
  findings are one class.
- Fix applied: from the dispositions in the review record.

## Results

| Judgement | Findings | Share | Fix the finding needed | Fix applied |
|---|---|---|---|---|
| rendering form | 85 | 37% | rephrase or cut | rephrase 55, add 15, cut 6, move 9 |
| edge-case elaboration | 52 | 22% | a default clause, or nothing | add 48, rephrase 3, none 1 |
| wording or naming | 43 | 19% | rephrase | add 34, rephrase 7, cut 2 |
| substantive gap or contradiction | 38 | 16% | add for a gap (about 18), cut one side for a contradiction (about 20) | add 31, move 4, cut 1, rephrase 1, none 1 |
| test demand beyond the corpus | 14 | 6% | leave, or a check | add 11, other 3 |

Words were required by about 18 findings of 232 (8%). Words were
added for 139 (60%).

| Origin of the quoted text | Findings |
|---|---|
| pre-existing specification text | 66 |
| the amendment's draft | 15 |
| text a round's fix introduced | 150 |
| not traced | 1 |

| Round | Findings | On fix-introduced text |
|---|---|---|
| 1 | 28 | 0 |
| 2 | 25 | 9 |
| 3 | 27 | 16 |
| 4 | 21 | 15 |
| 5 | 21 | 17 |
| 6 | 23 | 21 |
| 7 | 22 | 17 |
| 8 | 21 | 16 |
| 9 | 23 | 20 |
| 10 | 21 | 19 |

Substantive findings by origin: 14 on pre-existing text, 4 on the
amendment's draft, 20 on fix-introduced text. Of about 20
contradictions between passages found across the rounds (by the
reasoning role's reading; 9 by the word "contradict" or its kin in
the reviewer's text), 15 were between a fix and a passage the fix did
not touch.

| Snapshot | IR claims | Specification lines |
|---|---|---|
| before round 1 | 11 | 281 |
| after round 1 | 17 | 300 |
| after round 2 | 19 | 316 |
| after round 3 | 19 | 320 |
| after round 10 | 19 | 385 |

## What the data says

1. The IR did not hold the text. The specification's body was adopted
   as prose; the three amendment IRs hold 59 claims for a text of
   about 250 statements. The 66 findings on pre-existing text are
   findings on prose that no IR ever held. From round 3 the IR did not
   change while the prose grew by 65 lines: the reasoning role fixed
   prose only, against the schema's own lifecycle rule. The 15
   fix-introduced contradictions fell in that phase. The pipeline's
   claim is that an IR with relations surfaces contradictions before
   prose exists; the rounds never tested that claim, because the
   contradictions were made in prose the IR did not cover.
2. Most findings called for fewer or different words. Rendering form,
   wording and edge cases are 180 of 232. The fix applied was "add"
   for 97 of those 180.
3. Fixes fed the next round. From round 6, over 80% of each round's
   findings were on text a fix had introduced.
4. The reviewer does not look for unnecessary words. Its brief checks
   sentence length (SP-02) and rhetoric (SP-08). The style guide's
   "delete words that add tone but not content" is not a check, and
   no check covers repetition. The meta-review found the round-trip
   check stated twice and the `part:` defaults three times; no
   reviewer reported either in ten rounds.
5. The substantive findings were real and front-loaded: 12 in rounds
   1 and 2, then 2 to 5 per round. Among them: inferred claims under
   the wrong W-008 part; a raw IR without W-008's parts; nothing
   setting Status to reviewed; CK-14 firing during rounds; CK-15
   failing on unused terms.
