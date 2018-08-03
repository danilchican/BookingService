import React, { Component } from "react";
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    const name = this.props.name,
          info = this.props.info;

    return(
      <li className='info-box__list-item text-little'>{name}: {info}</li>
    )
  }
};

Item.propTypes = {
  number: PropTypes.string,
  dataDate: PropTypes.string,
}

export default Item;
