import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Feature Menu categories',
  type: 'document',
  fields: [
    {
      name: "name",
      type:"string",
      title:"Feature Categories name ",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type:"string",
      title:"short_description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurants",
      type:"array",
      title:"Restaurants",
      of:[{type: "reference", to:[{type:"restaurant" }]}]
    },
    
  ],
 
})
