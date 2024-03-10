import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'


const Header = () => {
  return (
	<div>
		<Link to={About}></Link>
	</div>
  )
}

export default Header