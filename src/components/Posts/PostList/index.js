import React from 'react'
import PostCard from '../PostCard'

const PostList = ({ posts }) => {

  const filteredPosts = posts.filter(post =>
    post.node.frontmatter.template !== 'info'
  )

  return (
    <div className='posts-list'>
      {filteredPosts.map(post => (
        <PostCard
          key={post.node.fields.slug}
          title={post.node.frontmatter.title}
          cover={post.node.frontmatter.cover}
          date={post.node.frontmatter.date}
          path={post.node.fields.slug}
          tags={post.node.frontmatter.tags}
          excerpt={post.node.frontmatter.excerpt ? post.node.frontmatter.excerpt : post.node.excerpt}
          timeToRead={post.node.timeToRead}
        />
      ))}
    </div>
  )
}

export default PostList
