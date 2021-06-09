import React from 'react'

const Post = ({ post }) => {


  // const { html } = post

  const postsss = {
    template: post,
    title: 'Tite One',
    category: 'Sample Cat'
  }

  return (

    <div
      className={'00000000000000000000000'}
      dangerouslySetInnerHTML={{ __html: postsss }}
    />

  )

}

export default Post
