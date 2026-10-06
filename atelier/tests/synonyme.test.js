import assert from "node:assert/strict";
import { it } from "node:test";
import { synonyme } from "../public/js/brain.js";

it("C1 : reconnaît les synonymes de salut", () => {
  assert.equal(synonyme("coucou"), "salut");
  assert.equal(synonyme("hello"), "salut");
  assert.equal(synonyme("bonsoir"), "salut");
});

it("C2 : reconnaît les synonymes de aide", () => {
  assert.equal(synonyme("help"), "aide");
  assert.equal(synonyme("sos"), "aide");
});

it("C3 : ignore la casse et les espaces autour", () => {
  assert.equal(synonyme("  HELLO "), "salut");
});

it("C4 : normalise les autres messages sans changer leur sens", () => {
  assert.equal(synonyme("  Météo "), "météo");
});

it("C5 : retourne une chaîne vide pour les valeurs non textuelles", () => {
  assert.equal(synonyme(undefined), "");
  assert.equal(synonyme(null), "");
  assert.equal(synonyme(42), "");
});
