export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5faac46cd674a80a3e9b8d97',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oth9ez8a',
                  apiId: 'f9cb793d-2212-4521-aed1-42d7595ac087'
                },
                {
                  buildHookId: '5faac46c578be8072aceac0d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mwu7nayt',
                  apiId: '3cd0a39d-1d32-4a24-b812-5cceb0d73f4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ch-bu/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mwu7nayt.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
