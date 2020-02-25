/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Warp`,
    siteUrl: `https://warp-blog.netlify.com`,
    description: `An open source guide to %TOPICS%`,
    topics: [
      'Python',
      'Machine Learning',
      'Design',
      'React',
      'Flutter',
      'JAMStack',
    ],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Topics',
        path: '/tags'
      },
      {
        name: 'About',
        path: '/about'
      },
    ],
    footerMenu: [
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Credits',
        path: '/credits'
      },
      {
        name: 'RSS',
        path: '/rss.xml'
      }
    ],
    search: true,
    author: {
      name: `Naval Monga`,
      description: `I'm <a href="https://linkedin.com/in/navalm" rel="noopener" target="_blank">naval</a>, founder of <a href="/" rel="noopener" target="_blank">warp.</a>
        <br/>
        Like what you see?
        <br/>
        <a href="https://github.com/jetlaglabs/phant.dev" rel="noopener" target="_blank">Star on GitHub!</a>`,
      social: {
        facebook: ``,
        twitter: ``,
        linkedin: ``,
        instagram: `https://instagram.com/jetlaglabs`,
        youtube: ``,
        github: `https://github.com/jetlaglabs`,
        twitch: `https://jetlaglabs.com`,
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `navlme - A Gatsby theme`,
          short_name: `navlme`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#121212`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/warp.dev.png`
        }
      }
    }
  ]
};

