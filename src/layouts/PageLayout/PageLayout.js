import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
import './PageLayout.scss'
import { loginAsync } from '../../modules/session'
import Header from '../../components/Header/Header'

const mapActionCreators = {
  loginAsync
}

const mapStateToProps = (state) => ({
  session: state.session
})

class PageLayout extends Component {
  static PropTypes = {
    children: PropTypes.element.isRequired,
    session : PropTypes.object.isRequired,
    loginAsync : PropTypes.func.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.object
  }

  handleLogin = (loginObj) => {
    this.props.loginAsync(loginObj, (path) => this.context.router.push(path))
  }

  render(){
    const {children} = this.props

    return(
      <div className='container text-center'>
        <h1>React Redux Starter Kit</h1>
        <Header handleLogin={this.handleLogin} session={this.props.session}/>
        <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
        {' · '}
        <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
        {' . '}
        <Link to='/dashboard' activeClassName='route-active'>Dashboard</Link>
        <div className='page-layout__viewport'>
          {children}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActionCreators)(PageLayout)
