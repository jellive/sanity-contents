export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: (Rule) => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'createdAt',
      title: 'Created at',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'alt',
          'options': {
            isHighlighted: true
          },
          validation: (Rule) => Rule.required()
        }
      ]
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'reference',
      to: {type: 'tag'},
      validation: (Rule) => Rule.required()
      // of: [{type: 'reference', to: {type: 'category'}}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'thumbnail',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
