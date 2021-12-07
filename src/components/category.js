import * as React from "react"
import { Link, graphql } from "gatsby"

const Category = ({ categoryTitle, posts }) => {
  if (posts == undefined) {
    return (
      <div>
        <h4>{categoryTitle}</h4>
      </div>
    )
  }
  return (
    <div>
      <h4>{categoryTitle}</h4>
    <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
              </article>
            </li>
          )
        })}
      </ol>
    </div>
    
  )
}

export default Category