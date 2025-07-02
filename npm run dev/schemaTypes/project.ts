import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  description: 'Portfolio projects for the SLM website. Use this section to add and edit projects for the portfolio page.',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({ 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Project Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Main image for the project card.'
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City, region, or country where the project is located',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'Ongoing', value: 'ongoing' }
        ],
        layout: 'radio',
      },
      initialValue: 'completed',
      description: 'Mark if the project is completed or ongoing.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      year: 'year',
      client: 'client',
    },
    prepare(selection) {
      const {title, media, year, client} = selection
      return {
        title: title,
        subtitle: `${client} (${year})`,
        media: media,
      }
    }
  }
})
