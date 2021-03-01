export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603c7cea60b9526c1cb3cf98',
                  title: 'Sanity Studio',
                  name: 'souls-over-stuff-studio',
                  apiId: 'f8d01e5c-7708-4deb-a79b-108cd61af478'
                },
                {
                  buildHookId: '603c7ceac3f05bffe484ab6c',
                  title: 'Blog Website',
                  name: 'souls-over-stuff',
                  apiId: '7081dba2-c4c8-4bc8-8335-d1ab72064462'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erflynn21/souls-over-stuff',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://souls-over-stuff.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
