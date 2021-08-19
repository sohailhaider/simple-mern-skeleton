import React from "react"
// import PropTypes from "prop-types"

const propTypes = {}

const defaultProps = {}

export default class MainLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        Loading...
      </React.Fragment>
    )
  }
}

 MainLoader.propTypes = propTypes
 MainLoader.defaultProps = defaultProps