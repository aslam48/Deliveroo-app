import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name:"name",
      type:"string",
      title:"Restaurant name",
      validation: (Rule) => Rule.required()
    },
    {
      name:"name",
      type:"string",
      title:"Restaurant name",
      validation: (Rule) => Rule.max(200)
    },
    {
      name: "image",
      type:"number",
      title:"latitude of the Resturant"
    },
    {
      name: "lat",
      type:"number",
      title:"latitude of the Resturant"
    },
    {
      name: "long",
      type:"number",
      title:"latitude of the Resturant"
    },
    {
      name: "address",
      type:"string",
      title:"latitude of the Resturant",
      validation: (Rule) => Rule.required()
    },
    {
      name: "rating",
      type:"number",
      title:"Enter a Rating from (1 -5 Stars)",
      validation: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error("Please enter a Value between 1 and 5")
    },

    {
      name: "type",
      type:"string",
      title:"Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{type: "category"}]
    },
    {
      name: "dishes",
      type:"array",
      title:"Dishes",
      of: [{type: "reference", to: [{type: "dish"}] }]
    }
  ],

 
})
