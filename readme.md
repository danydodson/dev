<div align='center' style='margin-bottom:20px; border-top: 1px solid lightgray; border-bottom: 1px solid lightgray;'>
  <img src='static/media/card-1200x630.webp' alt='Logo' width='50%'/>
</div> 

![https://github.com/danydodson/dev](https://img.shields.io/github/v/tag/danydodson/dev)
![https://www.codacy.com/app/danydodson/dev?utm_source=github.com&utm_medium=referral&utm_content=danydodson/dev&utm_campaign=Badge_Grade](https://api.codacy.com/project/badge/Grade/990fb54ea8094f2aa0ed77f14e859820)
![https://codeclimate.com/github/danydodson/dev](https://codeclimate.com/github/danydodson/dev/badges/gpa.svg)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b4f6b5502861e7166fea/test_coverage)](https://codeclimate.com/github/danydodson/dev/test_coverage)
![https://github.com/danydodson/dev/blob/master/license](https://img.shields.io/github/license/danydodson/dev.svg)
![https://twitter.com/intent/tweet?text=A%20cool%20%40gatsbyjs%20starter%3A&url=https%3A%2F%2Fgithub.com%2Fdanydodson%2Fdev](https://img.shields.io/twitter/url/https/github.com/danydodson/dev.svg?style=social)

# Developer Blog

### Features

- Gatsby v3 support
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Posts in Markdown
  - Code syntax highlighting
  - Embed YouTube videos
  - Embed Tweets
- Pagination
  - Configurable via `SiteConfig.js`
- Tags
  - Separate page for posts under each tag
- Categories
  - Separate page for posts under each category
- [Disqus](https://disqus.com/) support
  - Notifications about new disqus comments
- `/static/` and content folders are available to use with [gatsby-image](https://www.gatsbyjs.org/docs/gatsby-image/) out of the box for optimized image generation
- High configurability
- Separate components for everything:
  - User social profiles
  - Copyright information
  - More!
- [NetlifyCMS](https://www.netlifycms.org) support out of the box
- PWA features
  - Offline support
  - Web App Manifest support
  - Loading progress for slow networks
- SEO
  - [Google Analytics](https://marketingplatform.google.com/about/analytics/) support
  - Sitemap generation
  - robots.txt
  - General description tags
  - [Schema.org JSONLD (Google Rich Snippets)](https://schema.org/)
  - [OpenGraph Tags (Facebook/Google+/Pinterest)](https://ogp.me/)
  - [Twitter Tags (Twitter Cards)](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup)
- RSS feeds
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - LinkedIn share button
  - Telegram share button
- Development tools
  - [ESLint](https://eslint.org/) for linting
  - [Prettier](https://prettier.io/) for code formatting
  - [React Hooks Linting](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - [Netlify](https://www.netlify.com/) deploy configuration
  - [CodeClimate](https://codeclimate.com/) configuration file and badge


### Netlify CMS
If want to customize Netlify CMS, e.g. registering custom widgets or styling the preview pane, you can do so by editing `src/netlifycms/index.js`:

```js
import CMS from 'netlify-cms-app';

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
    },
  },
});
```

### Path Prefix

You can also optionally set `pathPrefix`:

```js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: '/dev', // Prefixes all links. For cases when deployed to example.github.io/dev/.
};
```

WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!

### Pagination

By default the starter will show 4 posts per page. The landing page is the first page located on `/` (controlled by the `Listing` component).

You can control the amount of posts via `SiteConfig` by setting the `postsPerPage: ${NUMBER}`.

NOTE: You can also disable the pagination by setting the `postsPerPage: 0`. In this case the landing page will be controlled by the `Landing` component.

<!-- ## NetlifyCMS

First of all, make sure to edit `static/admin/config.yml` and add your [GitHub/GitLab/NetlifyId credentials](https://www.netlifycms.org/docs/authentication-backends/):

```yml
backend:
  name: github # Refer to https://www.netlifycms.org/docs/authentication-backends/ for auth backend list and instructions
  branch: master # Branch to update
  repo: danydodson/dev # Repo for pushing new commits. Make sure to replace with your repo!
```

You can visit `/admin/` after and will be greeted by a login dialog (depending on the auth provider you ave chosen above).

For NetlifyCMS specific issues visit the [official documentation](https://www.netlifycms.org/docs/intro/). -->

## Author

Ruben Harutyunyan ([@danydodson](https://twitter.com/danydodson))
