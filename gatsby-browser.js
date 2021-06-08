import { wrapRootElement as wrap } from './src/styles/code/wrap-root-element'

import Prism from 'prism-react-renderer/prism'
;(typeof global !== 'undefined' ? global : window).Prism = Prism

export const wrapRootElement = wrap

require('prismjs/plugins/line-numbers/prism-line-numbers')

require('prismjs/plugins/command-line/prism-command-line.css')

require('prismjs/components/prism-bash')
require('prismjs/components/prism-csharp')
require('prismjs/components/prism-css')
require('prismjs/components/prism-docker')
require('prismjs/components/prism-graphql')
require('prismjs/components/prism-http')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-json')
require('prismjs/components/prism-lua')
require('prismjs/components/prism-markdown')
require('prismjs/components/prism-nginx')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-tsx')
require('prismjs/components/prism-scss')
require('prismjs/components/prism-shell-session')
