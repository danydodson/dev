const siteConfig = {

  /* Site
  ========================================= */
  title: 'Dany Dodson',
  siteUrl: 'https://danydodson.dev',
  titleAlt: 'Full Stack Developer Blog',
  description: 'Welcome! This is my Full Stack Web Developer blog',
  faviconSrc: 'src/assets/imgs/icon-256x.png',

  /* PWA
  ========================================= */
  shortName: 'dany',
  startUrl: '/',
  siteLogo: 'src/assets/imgs/card-1200x.png',
  siteLogoAlt: 'src/assets/imgs/card-1200x.png',
  themeColor: '#c62828',
  backgroundColor: '#e0e0e0',

  /* Profile
  ========================================= */
  author: 'Dany Dodson',
  location: 'Evansville, IN',
  profileImageName: 'src/assets/imgs/card-630x.png',
  profileDescription: '{ Full Stack Developer }',
  footerLink: 'about',

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
  socialMediaLinks: {
    github: { accountName: 'danydodson', showHeaderIcon: true },
    devto: { accountName: 'danydodson', showHeaderIcon: false },
    codepen: { accountName: 'danydodson', showHeaderIcon: true },
    facebook: { accountName: 'danydodson', showHeaderIcon: false },
    instagram: { accountName: 'ugly_casanova', showHeaderIcon: false },
    twitter: { accountName: 'dany_dodson', showHeaderIcon: false },
    email: { emailAddress: 'hello@danydodson.dev', showHeaderIcon: true },
    hashnode: { accountName: 'dany', showHeaderIcon: false },
    linkedIn: { accountName: 'in/danydodson', showHeaderIcon: false },
    medium: { accountName: 'danydodson', showHeaderIcon: false }
  },

  /* Tokens
========================================= */
  githubToken: process.env.GATSBY_GITHUB_TOKEN,

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
      accountName: 'https://shows.acast.com/6045df1ab353eb47301f68e4',
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

module.exports = siteConfig
