import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import GeneralLayout from "../components/GeneralLayout"
import BodyLayout from "../components/BodyLayout"

import Jumbotron from 'react-bootstrap/Jumbotron'

export default ({data}) => {
  return (
  <GeneralLayout>
  <Jumbotron className="bg-info text-center text-white" style={{borderRadius: "0px"}}>
    <h1 className="border-white">Projects</h1>
  </Jumbotron>
    <BodyLayout>
    <p>
      I will be continually updating this page since I haven't loaded in
      all the projects. Stay Tuned!
    </p>
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        if (!node.fields.slug.includes("projects")) {
          return null
        }
        return (
          <div key={node.id}>
            <Link to={node.fields.slug}
              css={css`text-decoration: none;color: inherit;`}>
              <h3 css={css`margin-bottom: ${rhythm(1 / 4)};`}>
                {node.frontmatter.title}{" "}
                <span css={css`color: #bbb;`}>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        )
      })}
    </div>
    </BodyLayout>
  </GeneralLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
