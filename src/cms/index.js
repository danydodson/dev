import CMS from 'netlify-cms-app'

import PagePreview from './preview/page'
import PostPreview from './preview/post'
import SnipPreview from './preview/snip'

CMS.registerPreviewTemplate('pages', PagePreview)
CMS.registerPreviewTemplate('posts', PostPreview)
CMS.registerPreviewTemplate('snips', SnipPreview)
