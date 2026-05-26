import { buildMakePerson } from "../../src/js-foundation/05-factory";

const getUUID = () => "1234";
const getAge = () => 34;

describe("05-factory", () => {
  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe("function");
  });

  test("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });

    const johnDoe = makePerson({
      name: "John Doe",
      birthdate: "1997-01-15",
    });

    expect(johnDoe).toEqual({
      id: "1234",
      name: "John Doe",
      birthdate: "1997-01-15",
      age: 34,
    });
  });
});
