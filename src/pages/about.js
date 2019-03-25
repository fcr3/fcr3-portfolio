import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Img from 'gatsby-image'
import GeneralLayout from "../components/GeneralLayout"
import BodyLayout from "../components/BodyLayout"

import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'

import arrow from '../assets/arrow.svg'

export default ({data}) => {
  const pictures = data.allFile.edges
  const picCards = pictures.map(({node}, index) => {
    if (!node.relativePath.includes("about")) {
      return null
    }
    let fld = node.childImageSharp.fluid;
    return (
      <Card className="bg-light border-white" style={{borderWidth: "8px"}} key={index}>
        <Img fluid={fld} alt="picCard" key={index}/>
      </Card>
    )
  });
  const techCards = pictures.map(({node}, index) => {
    if (!node.relativePath.includes("techStack")) {
      return null
    }
    let fld2 = node.childImageSharp.fluid;
    return (
      <Col lg="2" md="3" md="4" xs="4" key={index}>
        <Img fluid={fld2} alt="techStack" style={{margin: "5px"}} key={index}/>
      </Col>
    )
  });
  return (
  <GeneralLayout>
    <Jumbotron className="text-center bg-transparent container-fluid">
      <h1 style={{marginTop: "24px"}}>About Me</h1>
      <CardGroup>
        {picCards}
      </CardGroup>
    </Jumbotron>
    <BodyLayout>
      <div style={{marginTop: "-64px"}}>
        <h1 className="text-info" css={css`display: inline-block;border-bottom: 1px solid;`}>
          Hello!
        </h1>
        <h3>
          My name is Flaviano Christian Reyes, and this is my website!
        </h3>
      </div>
      <div style={{marginTop: "64px"}}>
        <h1 className="text-success" css={css`display: inline-block;border-bottom: 1px solid;`}>
          Quick Little Bits about Me
        </h1>
        <ul className="list-unstyled" style={{marginTop: "12px"}}>
          <Media as="li">
            <img
              width={64}
              height={64}
              className="mr-3"
              src={arrow}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="text-success">Love going on adventures with friends</h5>
              <p>
                If I'm not programming, I'm adventuring. If I'm not adventuring,
                I'm probably coding, but I might also be preparing for another adventure!
              </p>
            </Media.Body>
          </Media>

          <Media as="li">
            <img
              width={64}
              height={64}
              className="mr-3"
              src={arrow}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="text-success">Play basketball for fun</h5>
              <p>
                Best destress for me is playing pick-up games at some gym near by. I played
                basketball a lot in high school, so it's always a fun time for me :)
              </p>
            </Media.Body>
          </Media>

          <Media as="li">
            <img
              width={64}
              height={64}
              className="mr-3"
              src={arrow}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="text-success">Hardcore Binge Watcher</h5>
              <p>
                If I see a long break from work coming up, probably one of the first
                things I do is catch up on my shows. I usually swap around Hulu, Netflix,
                or HBO.
              </p>
            </Media.Body>
          </Media>
        </ul>
      </div>
      <div style={{marginTop: "64px"}}>
        <h1 className="text-danger" css={css`display: inline-block;border-bottom: 1px solid;`}>
          Technology Stack
        </h1>
        <Row>
          {techCards}
        </Row>
      </div>

    </BodyLayout>
  </GeneralLayout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {absolutePath:{regex:"/assets/about/|/assets/techStack/"}}) {
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
