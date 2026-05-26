import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe("http-client-plugin", () => {
  test("httpClientPlugin should return a string", async () => {
    const data = await httpClientPlugin.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });

  test("httpClientPlugin should have post, put and delete methods", () => {
    expect(typeof httpClientPlugin.get).toBe("function");
    expect(typeof httpClientPlugin.post).toBe("function");
    expect(typeof httpClientPlugin.put).toBe("function");
    expect(typeof httpClientPlugin.delete).toBe("function");

    expect(httpClientPlugin).toEqual({
      get: expect.any(Function),
      post: expect.any(Function),
      put: expect.any(Function),
      delete: expect.any(Function),
    });
  });
});
