import { characters } from "../../src/js-foundation/02-destructuring";

describe("02-destructuring", () => {
  test("characters shold contain Flash, Supermarn", () => {
    expect(characters).toContain("flash");
    expect(characters).toContain("superman");
  });

  test("first character should be flash, and second superman", () => {
    const [flash, superman] = characters;

    expect(flash).toBe("flash");
    expect(superman).toBe("superman");
  });
});
