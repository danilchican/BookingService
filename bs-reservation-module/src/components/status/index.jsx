import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./status.scss";

class Status extends Component {
  render() {
    const percent = this.props.percent;

    return(
      <div className='status'>
        <div className='status__bar' style={{width: percent + '%'}}></div>
      </div>
    )
  }
};

Status.propTypes = {
  percent: PropTypes.number
}

export default Status;
