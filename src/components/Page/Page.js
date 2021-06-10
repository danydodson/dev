import React from 'react'

const Page = ({ page }) => {  

  const { tagSlugs } = page.fields
  const { tags } = page.frontmatter

  return (
    tags && tagSlugs && <ul>
      {tagSlugs.map((slug, i) => (
        <li className='page-tagarinos' key={tags[i]}>
          {tags[i]}
        </li>
      ))}
    </ul>

    // tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />

    // <div className={styles['page']}>
    //   <Link className={styles['page__home-button']} to="/">All Articles</Link>

    //   <div className={styles['page__content']}>
    //     <Content body={html} title={title} />
    //   </div>

    //   <div className={styles['page__footer']}>
    //     <Meta date={date} />
    //     {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
    //     <Author />
    //   </div>

    //   <div className={styles['page__comments']}>
    //     <Comments pageSlug={slug} pageTitle={page.frontmatter.title} />
    //   </div>
    // </div>
  )
}

export default Page
