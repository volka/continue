import { describe, expect, it } from "vitest";

import { getTemplateForModel } from "./AutocompleteTemplate.js";

describe("getTemplateForModel", () => {
  it("uses an explicitly configured template before model-name detection", () => {
    const template = getTemplateForModel("gateway-model", "codestral");

    expect(template.template).toBe("[SUFFIX]{{{suffix}}}[PREFIX]{{{prefix}}}");
    expect(template.completionOptions?.stop).toEqual(["[PREFIX]", "[SUFFIX]"]);
  });
});
