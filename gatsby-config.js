module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.manuelperez.dev',
    title: 'Manuel Perez Dev',
    author: 'Manuel Pérez Regalado',
    description: 'Blog sobre desarrollo de software y buenas prácticas.'
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800
            }
          },
          'gatsby-remark-prismjs'
        ]
      }
    }

  ]
}
