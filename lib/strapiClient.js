export default class StrapiClient {
  constructor() { }

  async fetchData(path) {
    const requestURL = `${process.env.STRAPI_API}${path}`
    const response = await fetch(requestURL)
    const data = response.json()

    return data
  }
}