export default {
  name: 'book',
  type: 'document',
  title: 'Book',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    // {
    //   name: 'slug',
    //   type: 'slug',
    //   title: 'Slug',
    //   description: 'Some frontends will require a slug to be set to be able to show the person',
    //   options: {
    //     source: 'name',
    //     maxLength: 96
    //   }
    // },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'summary',
      type: 'array',
      title: 'Summary',
      of: [{type: 'block'}]
    },
    {
			name: 'url',
			type: 'url',
			title: 'URL'
    }
  ],
  // preview: {
  //   select: {
  //     title: 'name',
  //     subtitle: 'slug.current',
  //     media: 'image'
  //   }
  // }
}