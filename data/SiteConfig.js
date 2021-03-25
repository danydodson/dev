const config = {
  // 
  siteTitleShort: 'dd.dev', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitle: 'Dany Dodson\'s Blog & Portfolio', // Site title.
  siteTitleAlt: 'Dany Dodson\'s Blog & Portfolio', // Alternative site title for SEO.
  siteDescription: 'Hi! I\'m a Full Stack Web Developer', // Website description used for RSS feeds/meta description tag.
  siteLogo: '/icons/icon-1024x1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://danys.art', // Domain of your website without pathPrefix.
  // 
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: 'Dany Dodson\'s Blog & Portfolio RSS feed', // Title of the RSS feed
  // 
  disqusShortname: 'https-danydodson-github-io-dev', // Disqus shortname.
  // 
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/dev/.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  // 
  userName: 'Dany Dodson', // Username to display in the author segment.
  userEmail: 'hello@danydodson.dev', // Email used for RSS feed's author segment
  userTwitter: 'dany_dodson', // Optionally renders 'Follow Me' in the UserInfo segment.
  userLocation: 'Evansville Indiana, USA', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription: 'Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven\'t seen you in a year. And the good thing about dogs... is they got different dogs for different people.', // User description to display in the author segment.
  // 
  googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights

  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/danydodson/dev',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/dany_dodson',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:hello@danydodson.dev',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2020. Dany Dodson', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
