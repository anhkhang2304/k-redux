import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import './Dashboard.scss'
import List from './List'

export class Dashboard extends React.Component {
  static propTypes = {
    visitCount: React.PropTypes.number.isRequired,
    dashboardItems: React.PropTypes.array.isRequired,
    updateItem: React.PropTypes.func.isRequired
  }

  state = {
    inputValue: '',
    editedItemIndex: null
  }

  onChangeInput = event => this.setState({ inputValue: event.target.value })

  onSubmit = event => {
    event.preventDefault()
    const { inputValue: label, editedItemIndex: editItemIndex } = this.state
    if(this.state.inputValue === '')
      alert('nhap vao o trong di dkm')
    else{
      this.props.updateItem({ label, editItemIndex })
      this.setState({
        inputValue: ''
      })
    }
  }

  itemOnEdit = (editedItemIndex) => () => {
    const editedItem = this.props.dashboardItems[editedItemIndex]
    this.setState({ inputValue: editedItem.label, editedItemIndex })
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
          <input
            value={this.state.inputValue}
            type='text' placeholder='Pls enter here'
            onChange={this.onChangeInput} />
          <input type='submit' />
        </form>
        <List
          activeIndex={this.state.editedItemIndex}
          dashboardItems={dashboardItems}
          onClick={this.itemOnEdit} />
      </div>
    )
  }
}

export default Dashboard
