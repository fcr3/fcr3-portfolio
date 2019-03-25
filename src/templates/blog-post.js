import React from "react"
import { graphql } from "gatsby"
import GeneralLayout from "../components/GeneralLayout"
import BodyLayout from "../components/BodyLayout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <GeneralLayout>
      <BodyLayout>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </BodyLayout>
    </GeneralLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
