import { getAge } from "../../src/plugins/get-age.plugin";

describe("get-age-plugin", () => {
  test("getAge() should return the age of a person", () => {
    const birthdate = "1997-01-15";
    const age = getAge(birthdate);

    expect(typeof age).toBe("number");
  });

  test("getAge() should return current age", () => {
    const birthdate = "1997-01-15";
    const age = getAge(birthdate);

    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatedAge);
  });

  test("getAge() should return 0 years", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1997);

    const birthdate = "1997-01-15";
    const age = getAge(birthdate);

    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();
  });
});
