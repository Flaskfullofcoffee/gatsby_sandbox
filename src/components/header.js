import React from "react"
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ margin: `0 1rem`, color: 'white' }}>
    <Link style={{color: 'white'}} to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <div style={{height: '12vh', margin: '0', backgroundColor: 'indigo', display: 'flex', justifyContent: 'center'}}>
    <ul style={{ listStyle: 'none', display: 'flex'}}>
      <ListLink to='/'>Home</ListLink>
      <ListLink to='/about'>About</ListLink>
      <ListLink to='/contact'>Contact</ListLink>
      <ListLink to='/'>Misc.</ListLink>
    </ul>
  </div>
)
