import CMS from 'netlify-cms-app'

import PagePreview from './preview/page'
import PostPreview from './preview/post'

CMS.registerPreviewTemplate('pages', PagePreview)
CMS.registerPreviewTemplate('posts', PostPreview)
