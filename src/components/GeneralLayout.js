import React from "react"
import NavBar from './NavBar'
import SiteMetadata from "./site-metadata"

export default ({ children }) => (
  <div style={{width:"100%"}}>
    <SiteMetadata/>
    <NavBar />
    {children}
  </div>
)
