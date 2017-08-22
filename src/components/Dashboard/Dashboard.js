import React from 'react'
import PropTypes from 'prop-types'
import './Dashboard.scss'
import List from './List'

export const Dashboard = ({ visitCount, dashboardItems }) => (
  <div>
    <h2 className='dashboardContainer'>
      Dashboard: {'  '}
      <span className='dashboard--green'>
        {visitCount}
      </span>
    </h2>
    <List dashboardItems={dashboardItems} />
  </div>
)
Dashboard.propTypes = {
  visitCount: PropTypes.number.isRequired,
}

export default Dashboard
