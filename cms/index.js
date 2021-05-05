import CMS from 'netlify-cms-app'

import PagePreview from './preview/page'
import PostPreview from './preview/post'
import CodePreview from './preview/code'

CMS.registerPreviewTemplate('pages', PagePreview)
CMS.registerPreviewTemplate('posts', PostPreview)
CMS.registerPreviewTemplate('codes', CodePreview)
