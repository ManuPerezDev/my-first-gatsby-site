module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.manuelperez.dev',
    title: 'Manuel Perez Dev',
    author: 'Manuel Pérez Regalado',
    description: 'Blog sobre desarrollo de software y buenas prácticas.'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark'
  ]
}
