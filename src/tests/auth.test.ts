import { describe, test, expect } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns API key if exists", () => {
    const headers = {
      authorization: "ApiKey 123456",
    };

    const result = getAPIKey(headers as any);

    expect(result).toBe("123456");
  });

  test("returns null if no API key", () => {
    const headers = {};

    const result = getAPIKey(headers as any);

    expect(result).toBeNull();
  });
});
