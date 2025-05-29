import {defineField, defineType} from 'sanity'

export const intencjaType = defineType({
  name: 'intencja',
  title: 'Intencje',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Treść',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Data',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
  ],
})
