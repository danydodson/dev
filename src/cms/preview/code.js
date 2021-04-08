import React from 'react'

const CodePreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body')
  const title = entry.getIn(['data', 'title'])

  return (
    <div className='code'>
      <h1 className='code__title'>{title}</h1>
      <div className='code__body'>{body}</div>
    </div>
  )
}

export default CodePreview
