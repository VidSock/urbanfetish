var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: 'Abandoned Urbex Urban Exploration Photos and Locations | Urban Fetish',
    siteUrl: `https://urbanfetish.com`,
    description:
      'Bringing new definitions to the genre of urban exploration photography. Experience some of the most remote, desolate locations photographed in the dead of night by world renown night photographer Todd Lambert.',
  },
  plugins: [
	  

    
    
    
    
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-140479230-1"],
      },
    },
    
    
    
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    
   
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img/gallery1`,
        name: 'gallery',
      },
    },
    
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },


    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          {
        resolve: "gatsby-remark-external-links",
        options: {
          target: "_self",
          rel: "nofollow"
        }
      }
        ],
      },
    },
    
    
    

    
    
    
    
    
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-sitemap`,
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UrbanFetish`,
        short_name: `UrbanFetish`,
        start_url: `/`,
        background_color: `#222`,
        theme_color: `#FAE042`,
        display: `standalone`,
        icon: `src/img/urban-fetish-icon.png`,
      },
    },
    
        { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['headroom', 'headroom--unfixed'], // Don't remove this selector
         //ignore: ['index.css'], // Ignore files/folders
         purgeOnly : ['/animate.css', '/custom.css', '/noscript.css'], // Purge only these files/folders
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
}
