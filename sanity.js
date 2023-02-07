import sanityClient from "@sanity/client"
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"

const client =sanityClient({
    projectId: 'tramz6ob',
    dataset: "production",
    useCdn:true,
    apiversion:"2021-10-21"
})

const builder = ImageUrlBuilder(client)

expo const urlFor = (source) => builder.image(source)