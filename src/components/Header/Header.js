import React, { Component, PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import LoginJSX from './LoginJSX'

export const Header = ({ session, handleLogin }) => {
  let loginMessageJSX = (!session.isLoggedIn && session.loginToken === 'sai cmnr')
    ? <p>Sai cmnr nhé!</p> : null

  return(
    <div>
      <h1>Welcome</h1>
      { !session.isLoggedIn && <LoginJSX handleLogin={handleLogin} /> }
      {loginMessageJSX}
    </div>
  )
}

Header.PropTypes = {
  session: React.PropTypes.object.isRequired,
  handleLogin: React.PropTypes.func.isRequired
}

export default Header
