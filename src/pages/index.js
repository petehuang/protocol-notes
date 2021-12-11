import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Preamble from "../components/preamble"
import Category from "../components/category"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  var categories = {};

  posts.map(post => {
    if (!(post.frontmatter.category in categories)) {
      categories[post.frontmatter.category] = [post];
    } else {
      categories[post.frontmatter.category].push(post);
    }
  });
  console.log(categories);

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Home" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Preamble />
      <Seo title="Home" />
      <div className="wrapper">
      <div className="column-wrapper">
        <Category categoryTitle="Dexes" posts={categories["Dexes"]} />
        <Category categoryTitle="Stablecoins" posts={categories["Stablecoins"]} />
        <Category categoryTitle="Lending" posts={categories["Lending"]} />
        <Category categoryTitle="Olympus Forks" posts={categories["Olympus Forks"]} />
        
      </div>
      <div className="column-wrapper">
      <Category categoryTitle="Curve Wars" posts={categories["Curve Wars"]} />
      <Category categoryTitle="Liquid Staking" posts={categories["Liquid Staking"]} />
      <Category categoryTitle="Yield Optimizer" posts={categories["Yield Optimizer"]} />
      </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
        }
      }
    }
  }
`
