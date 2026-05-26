//AAA
// Arrange, Act, Assert

describe("Test in the App file", () => {
  test("", () => {
    // arrange: preparar lo que vamos a probar
    const num1 = 10;
    const num2 = 20;

    // act: ejecutar la función que queremos probar
    const result = num1 + num2;

    // assert: comprobar que el resultado es el esperado
    expect(result).toBe(30);
  });
});
