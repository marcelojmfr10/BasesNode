import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    // const respo = await fetch(url);
    // return await respo.json();
    const { data } = await axios.get(url);
    return data;
  },
  post: async (url: string, body: any) => {
    throw new Error("not implemented");
  },
  put: async (url: string, body: any) => {
    throw new Error("not implemented");
  },
  delete: async (url: string, body: any) => {
    throw new Error("not implemented");
  },
};
