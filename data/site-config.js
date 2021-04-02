const siteConfig = {
  /* Site
  ========================================= */
  title: 'Dany Dodson',
  siteUrl: 'https://danydodson.dev',
  titleAlt: 'Full Stack Developer Blog',
  description: 'Welcome! This is my FullStack Web Developer blog',
  faviconSrc: 'static/icons/favicon.png',

  /* PWA
  ========================================= */
  startUrl: '/',
  titleShort: 'dany',
  siteLogo: 'static/cards/card-1200x630.webp',
  siteLogoAlt: 'static/cards/card-1200x630.webp',
  bgColor: '#e0e0e0',
  themeColor: '#c62828',

  /* UI
  ========================================= */
  maxWidth: 768,
  enableAbout: true,
  useScrollIndicator: true,
  showScrollbar: 'none',
  defaultTheme: 'light',
  breakCodeLines: false,
  showTimeToRead: false,

  /* Profile
  ========================================= */
  author: 'Dany Dodson',
  profileDescription: '{ Full Stack Developer }',
  profileImageName: 'profile.webp',
  location: 'Evansville, IN',
  footerLink: 'about',

  /* Social Media Links
  ========================================= */
  socialMediaLinks: {
    github: { accountName: 'danydodson', showHeaderIcon: true },
    devto: { accountName: 'danydodson', showHeaderIcon: false },
    codepen: { accountName: 'danydodson', showHeaderIcon: true },
    hashnode: { accountName: 'dany', showHeaderIcon: false },
    facebook: { accountName: 'danydodson', showHeaderIcon: false },
    instagram: { accountName: 'ugly_casanova', showHeaderIcon: false },
    twitter: { accountName: 'dany_dodson', showHeaderIcon: false },
    linkedIn: { accountName: 'in/danydodson', showHeaderIcon: false },
    email: { emailAddress: 'hello@danydodson.dev', showHeaderIcon: true },
    medium: { accountName: 'danydodson', showHeaderIcon: false }
  },

  /* Share Buttons
  ========================================= */
  shareButtons: {
    email: true,
    facebook: true,
    twitter: true,
    reddit: true,
    linkedIn: true
  },

  /* Comments
  ========================================= */
  comments: {
    facebook: {
      enabled: false,
      appId: process.env.FB_APP_ID
    },
    utterances: {
      enabled: true,
      repoUrl: 'danydodson/dev'
    }
  },

  /* Tracking
  ========================================= */
  gaTrackingId: `${process.env.GOOGLE_TRACKING_ID}`,
  googleAdSenseId: process.env.GOOGLE_AD_SENSE_ID,

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
  }
}

module.exports = siteConfig
