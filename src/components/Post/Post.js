import React from 'react'
// import { Link } from 'gatsby'
// import Author from './Author'
// import Comments from './Comments'
// import Content from './Content'
// import Meta from './Meta'
// import Tags from './Tags'

const Post = ({ post }) => {
  
  const { tagSlugs } = post.fields
  const { tags } = post.frontmatter

  return (
    tags && tagSlugs && <ul>
      {tagSlugs.map((slug, i) => (
        <li className='post-tagarinos' key={tags[i]}>
          {tags[i]}
        </li>
      ))}
    </ul>

    // tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />

    // <div className={styles['post']}>
    //   <Link className={styles['post__home-button']} to="/">All Articles</Link>

    //   <div className={styles['post__content']}>
    //     <Content body={html} title={title} />
    //   </div>

    //   <div className={styles['post__footer']}>
    //     <Meta date={date} />
    //     {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
    //     <Author />
    //   </div>

    //   <div className={styles['post__comments']}>
    //     <Comments postSlug={slug} postTitle={post.frontmatter.title} />
    //   </div>
    // </div>
  )
}

export default Post
