import React from 'react'

const SnipPreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body')
  const title = entry.getIn(['data', 'title'])

  return (
    <div className='snip'>
      <h1 className='snip__title'>{title}</h1>
      <div className='snip__body'>{body}</div>
    </div>
  )
}

export default SnipPreview
