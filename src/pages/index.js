import React from "react"
import Header from '../components/header.js'
import Layout from '../components/layout.js'
import { Link } from 'gatsby';

export default () => (
   <div>
      <Header />
      <Link to='/about'>About</Link>
    </div>
)
