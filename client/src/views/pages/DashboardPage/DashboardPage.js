import React from "react"
// import PropTypes from "prop-types"

const propTypes = {}

const defaultProps = {}

export default class DashboardPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        Welcome To Dashboard
      </React.Fragment>
    )
  }
}

 DashboardPage.propTypes = propTypes
 DashboardPage.defaultProps = defaultProps