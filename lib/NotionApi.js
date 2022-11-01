import { Client } from "@notionhq/client";

export class FetchData {
  constructor() {
    this.DATABASE_PROJECTS_ID = '0891bd0054044dfc8282552bd938d2db'
    this.DATABASE_ABOUT_ID = '8e5e115328dc46fe86a46b0ea0dc8555'
    this.handlerFetch = new Client({ auth: process.env.NOTION_API_KEY });
  }

  async getProjects() {
    const database = await this.handlerFetch.databases
      .query({
        database_id: this.DATABASE_PROJECTS_ID
      })
    const results = database.results.map(result => ({
      project_id: result.id,
      data: {
        project_cover: result.properties.cover.files[0].file.url,
        project_title: result.properties.title.title[0].plain_text,
        project_description: result.properties.description.rich_text[0].plain_text,
        project_techs: result.properties.techs.rich_text[0].plain_text,
        project_repo: result.properties.repo.url
      }
    }
    ))

    return results
  }

  async getAbout() {
    const database = await this.handlerFetch.databases
      .query({
        database_id: this.DATABASE_ABOUT_ID
      })

    const results = database.results.map(result => ({

      name: result.properties.name.title[0].plain_text,
      about: result.properties.about.rich_text[0].plain_text,
      footer: result.properties.footer.rich_text[0].plain_text

    }
    ))
    return results[0]
  }
}