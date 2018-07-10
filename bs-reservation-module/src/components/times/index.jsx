import React, { Component } from "react";
import PropTypes from 'prop-types';
import Time from './time';
import "./times.scss";

class Times extends Component {
  constructor(){
    super();

    this.searchTime = this.searchTime.bind(this);
  }

  searchTime(search) {
    let i = this.props.data.length;
    while (i--) {
      if (this.props.data[i].time === search) {
       return true;
      }
    }
    return false;
  }

  render() {
    const minTime = this.props.minTime;
    const maxTime = this.props.maxTime;

    let times = [],
        timeTo,
        timeFrom,
        time,
        activeTime = false;
    for(let i = minTime; i < maxTime; i++) {
      timeFrom = ('0' + (i)).slice(-2);
      timeTo = ('0' + (i + 1)).slice(-2);
      time = `${timeFrom}:00-${timeTo}:00`;

      activeTime = this.searchTime(time);

      times.push(<Time timeFrom={timeFrom} timeTo={timeTo} time={time} activeTime={activeTime} key={`time-${i}`} changeTime={this.props.changeTime} />);
    }

    return(
      <div className='times'>
        {times}
      </div>
    )
  }
};

Times.propTypes = {
  data: PropTypes.array,
  minTime: PropTypes.number,
  maxTime: PropTypes.number,
  changeTime: PropTypes.func
}

export default Times;
