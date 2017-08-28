import React, { PropTypes } from 'react'

const List = ({ dashboardItems, onClick, activeIndex }) => {
  const items = dashboardItems.map((item, i) => {
    const itemJSX = activeIndex === i ? <b><u>{item.label}</u></b> : item.label
    return (
      <h4 key={i} onClick={onClick(i)}>{itemJSX}</h4>
    )
  })

  return (
    <div id="abc">
      { items }
    </div>
  )
}

List.PropTypes = {
  dashboardItems: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default List
