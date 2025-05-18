"use server"
//call to payload Local API, quering the about collection
import { getPayload } from "payload"
import config from "@payload-config"

const payload = await getPayload({ config })

export async function getAboutTendani(){
    const result = await payload.find({
        collection: 'about', // required
        depth: 2,
        page: 1,
        limit: 10,
        pagination: false, // If you want to disable pagination count, etc.
        where: {}, // pass a `where` query here
        sort: '-title',
        locale: 'all',
        fallbackLocale: false,
        overrideAccess: false,
        showHiddenFields: true,
      })
      return result
}
