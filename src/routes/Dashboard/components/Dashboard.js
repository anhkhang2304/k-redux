import React, { PropTypes } from 'react'
import Dashboard from 'components/Dashboard'

class DashboardRoute extends React.Component {
  static propTypes = {
    dashboardVisitIncrement: PropTypes.func.isRequired,
    dashboard: PropTypes.object.isRequired
  }

  componentDidMount(){
    this.props.dashboardVisitIncrement()
  }

  render() {
  console.log(this.props);
    return (
      <Dashboard dashboardItems={this.props.dashboard.dashboardItems} visitCount={this.props.dashboard.visitCount} />
    )
  }
}

export default DashboardRoute
