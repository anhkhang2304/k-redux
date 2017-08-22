import React, { PropTypes } from 'react'

const List = ({ dashboardItems }) => {
  console.log(dashboardItems)
  const items = dashboardItems.map((item, i) => (
    <h4 key={i}>{item.label}</h4>
  ))

  return (
    <div id="abc">
      { items }
    </div>
  )
}

export default List
