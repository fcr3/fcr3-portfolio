import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import GeneralLayout from "../components/GeneralLayout";
import BodyLayout from "../components/BodyLayout"

import Container from 'react-bootstrap/Container'
import landing from '../assets/landing.jpg'

export default ({ data }) => {
  return (
    <GeneralLayout>
      <Container className="text-white" fluid={true} style={{
        backgroundImage: `url(${landing})`,
        backgroundPosition: '45% center',
        backgroundSize: 'cover',
        height: '50vh',
        position: 'relative'
      }}>
      </Container>
      <BodyLayout>
        <div>
          <h1 className="text-warning" css={css`display: inline-block;border-bottom: 1px solid;`}>
            Hello!
          </h1>
          <h3>
            My name is Flaviano Christian Reyes, and this is my website!
          </h3>
        </div>
        <div style={{marginTop: "64px"}}>
          <h1 className="text-info" css={css`display: inline-block;border-bottom: 1px solid;`}>
            Features
          </h1>
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
                    <span css={css`color: #bbb;`}>— {node.frontmatter.date}</span>
                  </h3>
                  <p>{node.excerpt}</p>
                </Link>
              </div>
            )
          })}
        </div>
        <div style={{marginTop: "64px"}}>
          <h1 className="text-success" css={css`display: inline-block;border-bottom: 1px solid;`}>
            Amazing Pandas Eating Things
          </h1>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            if (!node.fields.slug.includes("pandas")) {return null}
            return (
              <div key={node.id}>
                <Link to={node.fields.slug}
                  css={css`text-decoration: none;color: inherit;`}>
                  <h3 css={css`margin-bottom: ${rhythm(1 / 4)};`}>
                    {node.frontmatter.title}{" "}
                    <span css={css`color: #bbb;`}>— {node.frontmatter.date}</span>
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
    allFile(filter: {absolutePath:{regex:"/assets/techStack/"}}) {
      edges {
        node {
          relativePath
          prettySize
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
