import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import GeneralLayout from "../components/GeneralLayout"
import BodyLayout from "../components/BodyLayout"

import Jumbotron from 'react-bootstrap/Jumbotron'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

export default ({data}) => {
  const pictures = data.allFile.edges
  const cards = pictures.map(({node}, index) => {
    let fld = node.childImageSharp.fluid;
    return (
      <Card className="bg-light border-0">
        <Img fluid={fld} alt="text" />
      </Card>
    )
  });
  return (
  <GeneralLayout>
    <Jumbotron className="text-center bg-danger text-white" style={{borderRadius: "0px"}}>
      <h1 className="border-white">Designs</h1>
    </Jumbotron>
    <BodyLayout>
      <CardColumns>
      {cards}
      </CardColumns>
    </BodyLayout>
  </GeneralLayout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {absolutePath:{regex:"/assets/design/"}}) {
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
