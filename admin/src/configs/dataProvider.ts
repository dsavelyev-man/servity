import {fetchUtils} from "react-admin";
import jsonServerProvider from "ra-data-json-server"
import axios from "axios";

const httpClient: (url: any, options?: fetchUtils.Options) => Promise<{
  status: number;
  headers: Headers;
  body: string;
  json: any;
}> = async (url, options = {}) => {

  let modifiedBody = options.body

  if (!options.headers) {
    options.headers = new Headers({});
  }

  if(options.body) {
    //@ts-ignore
    const body = JSON.parse(options.body)
    const imageKeys = []

    const form = new FormData()

    for(const key in body) {
      if(body[key].rawFile) {
        imageKeys.push(key)

        const res = await axios.get(body[key].src)

        const file = new File([res.data], body[key].title, {
          type: res.headers["Content-Type"] as string
        })

        body[key] = file
      }

      form.append(key, body[key])

    }

    modifiedBody = form

    if (!options.headers) {
      //@ts-ignore
      options.headers.set("Content-Type",  "multipart/form-data")
    }
  }

  //@ts-ignore
  options.headers.set('admin-source', 'yes');


  options.body = modifiedBody

  console.log(options.body)

  return fetchUtils.fetchJson(url, options);
};

const provider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL,
  httpClient
);

export const dataProvider = {
  ...provider,
  // create: async (resource, params) => {
  //   try {
  //     const res = await provider.create(resource, params)
  //
  //     return res
  //   } catch (e) {
  //     throw new Error("Error")
  //   }
  // },
  //
  // update: async (resource, params) => {
  //   try {
  //     const res = await provider.update(resource, params)
  //
  //     return res
  //   } catch (e) {
  //     throw new Error("Error")
  //   }
  // },
}
