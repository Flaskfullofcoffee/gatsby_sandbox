import React from "react"
import { Link } from 'gatsby';
import Layout from '../components/layout.js'
import Header from '../components/header.js'

export default () => (
  <Layout>
  <div style={{ color: `teal` }}>
    <Header headerText='Fuck off miss Daisy'/>
    <div>
      <h1>About me</h1>
      <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
    </div>
    <Link to='/'>Return home</Link>
  </div>
  </Layout>
)
