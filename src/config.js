const config = {
  /* Site
  ========================================= */
  title: 'Dany Dodson',
  siteUrl: 'https://danydodson.dev',
  titleAlt: 'Full Stack Developer Blog',
  description: 'Welcome! This is my Full Stack Web Developer blog',
  favicon: 'src/images/favicon.png',

  /* PWA
  ========================================= */
  shortName: 'dany',
  startUrl: '/',
  siteLogo: 'src/images/og@2x.png',
  siteLogoAlt: 'src/images/og@2x.png',
  themeColor: '#c62828',
  backgroundColor: '#e0e0e0',

  /* Profile
  ========================================= */
  author: 'Dany Dodson',
  location: 'Evansville, IN',
  profileImageName: 'src/images/og@1x.png',
  profileDescription: '{ Full Stack Developer }',
  footerLink: 'about',

  
  /* Fonts
  ========================================= */  
  // fontSans: 'Calibre', -- 'IBM Plex Sans'
  // fontMono: 'SF Mono', -- 'Oxanium'
  fontMain: '"IBM Plex Sans"', // Main Font
  fontProfile: '"Oxanium"', // Font inside profile
  fontCodeBlocks: 'Menlo, Monaco, monospace', // Font for code blocks
  // These fonts will be used if above fonts are unavailable
  fontsBackUp: `, sans-serif, -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'`,
  
  /* UI
  ========================================= */
  maxWidth: 768,
  dateFromFormat: 'DD-MM-YYYY',
  postsPerPage: 15,
  enableAbout: true,
  useScrollIndicator: true,
  showScrollbar: 'none',
  defaultTheme: 'light',
  breakCodeLines: false,
  showTimeToRead: true,

  /* Colors for each Light / Dark Theme
  ========================================= */
  headerColorLight: '#eee',
  headerColorDark: '#252427',

  bgColorLight: '#fff',
  bgColorDark: '#292a30',

  /* background colors surrounding profile & posts in main page */
  bgSubColorLight: '#f7f7f7',
  bgSubColorDark: '#26272e',

  /* Font Colors */
  fontColorLight: '#313131',
  fontSubColorLight: '#808080',

  fontColorDark: '#d3d3dc',
  fontSubColorDark: '#a1a1a5',

  /* Scrollbar Colors */
  scrollbarColorLight: '#ccc',
  scrollbarColorDark: '#747d92',

  scrollbarBgLight: '#eff1f4',
  scrollbarBgDark: '#2e3039',

  scrollbarHoverLight: '#bbb',
  scrollbarHoverDark: '#818ca4',

  /* Underline Color */
  underlineColorLight: '#8807ff',
  underlineColorDark: '#f2c033',

  /* Scroll Progress Bar Color */
  progressBarColorLight: '#8b8ed3',
  progressBarColorDark: '#838da4',

  /* To customize code blocks, modify /src/components/Code/styles/* */

  /* Share Buttons
========================================= */
  shareButtons: {
    email: true,
    facebook: true,
    twitter: true,
    reddit: true,
    linkedIn: true
  },

  /* Social Media Links
  ========================================= */
  socials: {
    github: { username: 'danydodson', showHeaderIcon: true },
    devto: { username: 'danydodson', showHeaderIcon: false },
    codepen: { username: 'danydodson', showHeaderIcon: true },
    facebook: { username: 'danydodson', showHeaderIcon: false },
    instagram: { username: 'ugly_casanova', showHeaderIcon: false },
    twitter: { username: 'dany_dodson', showHeaderIcon: false },
    email: { address: 'hello@danydodson.dev', showHeaderIcon: true },
    hashnode: { username: 'dany', showHeaderIcon: false },
    linkedIn: { username: 'in/danydodson', showHeaderIcon: false },
    medium: { username: 'danydodson', showHeaderIcon: false }
  },

  /* Tokens
  ========================================= */
  gatsby: {},

  /* Algolia
  ========================================= */
  algolia: {
    indexName: process.env.ALGOLIA_INDEX_NAME,
    applicationId: process.env.ALGOLIA_APP_ID,
    searchApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY,
    adminApiKey: process.env.ALGOLIA_ADMIN_API_KEY
  },

  /* Comments
  ========================================= */
  comments: {
    utterances: {
      enabled: true,
      repoUrl: 'danydodson/dev'
    }
  },

  /* Patreon
  ========================================= */
  patreonSetup: {
    patreon: {
      patreonName: 'https://www.patreon.com/danydodson',
      publicView: 'https://www.patreon.com/danydodson?fan_landing=true',
      showHeaderIcon: true
    },
    nonceCast: {
      username: 'https://shows.acast.com/6045df1ab353eb47301f68e4',
      showHeaderIcon: true
    }
  },

  /* Tracking
  ========================================= */
  google: {
    trackingId: `${process.env.GOOGLE_TRACKING_ID}`,
    adsenseId: process.env.GOOGLE_AD_SENSE_ID
  },

  /* Datadog
  ========================================= */
  datadog: {
    applicationId: process.env.DATADOG_APP_ID,
    clientToken: process.env.DATADOG_CLIENT_TOKEN
  },

  /* Sentry
  ========================================= */
  sentryDsn: process.env.SENTRY_DSN

}

module.exports = config
