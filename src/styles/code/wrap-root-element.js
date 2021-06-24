import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import Code from './code-global'

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)

    if (props) {
      return <Code {...props} />
    }

    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>
}

export const wrapRootElement = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>


