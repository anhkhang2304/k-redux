import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import './Dashboard.scss'
import List from './List'

export class Dashboard extends React.Component {
  static propTypes = {
    visitCount: React.PropTypes.number.isRequired,
    dashboardItems: React.PropTypes.array.isRequired
  }

  state = {
    inputValue: ''
  }

  onChangeInput = event => this.setState({ inputValue: event.target.value })

  onSubmit = event => {
    event.preventDefault()
    const { inputValue: label } = this.state
    if(this.state.inputValue === '')
      alert('nhap vao o trong di dkm')
    else{
      this.props.updateItem({ label })
      this.setState({
        inputValue: ''
      })
    }
  }

  render(){
    const { visitCount, dashboardItems } = this.props

    return(
      <div>
        <h2 className='dashboardContainer'>
          Dashboard: {'  '}
          <span className='dashboard--green'>
            {visitCount}
          </span>
        </h2>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.inputValue} type='text' placeholder='Pls enter here' onChange={this.onChangeInput} />
          <input type='submit' />
        </form>
        <List dashboardItems={dashboardItems} />
      </div>
    )
  }
}

export default Dashboard
