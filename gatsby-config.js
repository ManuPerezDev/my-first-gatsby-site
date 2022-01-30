module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.manuelperez.dev',
    title: 'Manuel Perez Dev',
    author: 'Manuel Pérez Regalado',
    description: 'Blog sobre reflexiones sobre el desarrollo de software y las buenas prácticas.'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 864
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              copy: true
            }
          }
        ],
        plugins: ['gatsby-remark-autolink-headers']
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark'
  ]
}
