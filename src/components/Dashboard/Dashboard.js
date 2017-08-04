import React from 'react'
import PropTypes from 'prop-types'
import './Dashboard.scss'

export const Dashboard = ({ dashboard, increment, doubleAsync }) => (
  <div>
    <h2 className='dashboardContainer'>
      Dashboard: {'  '}
      <span className='dashboard--green'>
        {dashboard}
      </span>
    </h2>
    <button className='btn btn-primary' onClick={increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-secondary' onClick={doubleAsync}>
      Double (Async)
    </button>
  </div>
)
Dashboard.propTypes = {
  dashboard: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Dashboard
