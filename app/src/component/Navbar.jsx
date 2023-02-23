import React from 'react'
import './navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
  )
}
const Navbar = () => {
  return (
      <nav className="nav">
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/team">Team Members</CustomLink>
          <CustomLink to="/recent">Recent Activity</CustomLink>
        </ul>
      </nav>
  )
}

export default Navbar;