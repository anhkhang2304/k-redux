import React, { PropTypes } from 'react'
import Dashboard from 'components/Dashboard'

class DashboardRoute extends React.Component {
  static propTypes = {
    dashboardVisitIncrement: PropTypes.func.isRequired,
    dashboard: PropTypes.object.isRequired,
    dashboardAddItem: PropTypes.func.isRequired,
    dashboardEditItem: PropTypes.func.isRequired,
    session: PropTypes.object.isRequired
  }

  componentDidMount(){
    this.props.dashboardVisitIncrement()
  }

  updateItem = ({ editItemIndex, label }) => (
    editItemIndex === null ? this.props.dashboardAddItem({ label })
                           : this.props.dashboardEditItem({ editItemIndex, label })
  )

  render() {
    if (!this.props.session.isLoggedIn){
      return <h4> Đăng nhập đi mày! </h4>
    }
    return (
      <Dashboard
        dashboardItems={this.props.dashboard.dashboardItems}
        visitCount={this.props.dashboard.visitCount}
        updateItem={this.updateItem} />
    )
  }
}

export default DashboardRoute
