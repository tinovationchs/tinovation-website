// @ts-nocheck
import assert from "node:assert/strict";
import test from "node:test";

import { initializeScrollAtTop } from "../src/lib/scroll.js";

test("initializes the site at the top instead of restoring a previous scroll position", () => {
  const scrollCalls = [];
  const browserWindow = {
    history: { scrollRestoration: "auto" },
    scrollTo: (...args) => scrollCalls.push(args),
  };

  initializeScrollAtTop(browserWindow);

  assert.equal(browserWindow.history.scrollRestoration, "manual");
  assert.deepEqual(scrollCalls, [[0, 0]]);
});
