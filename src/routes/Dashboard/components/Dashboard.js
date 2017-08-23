import React, { PropTypes } from 'react'
import Dashboard from 'components/Dashboard'

class DashboardRoute extends React.Component {
  static propTypes = {
    dashboardVisitIncrement: PropTypes.func.isRequired,
    dashboard: PropTypes.object.isRequired,
    dashboardAddItem: PropTypes.func.isRequired
  }

  componentDidMount(){
    this.props.dashboardVisitIncrement()
  }

  updateItem = ({ label }) => (
    this.props.dashboardAddItem({ label })
  )

  render() {
  console.log(this.props);
    return (
      <Dashboard
        dashboardItems={this.props.dashboard.dashboardItems}
        visitCount={this.props.dashboard.visitCount}
        updateItem={this.updateItem} />
    )
  }
}

export default DashboardRoute
