import React, { Component } from "react";
import PropTypes from 'prop-types';
import Item from './item';
import "./specialists.scss";

class Specialists extends Component {
  render() {
    const data = this.props.data;
    // console.log(data);

    return(
      <div className='specialists'>
        {data.length > 0 &&
          data.map((item, i) => <Item data={item} key={`specialist-${i}`} changeName={this.props.changeName} />)
        }
        {data.length === 0 && 'нет специалистов' }
      </div>
    )
  }
};

Specialists.propTypes = {
  data: PropTypes.array,
  changeName: PropTypes.func
}

export default Specialists;
