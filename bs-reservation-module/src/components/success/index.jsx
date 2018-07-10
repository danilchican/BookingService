import React, { Component } from "react";
import "./success.scss";

class Success extends Component {
  render() {
    return(
      <div className='success'>
        <div className='success__title h1'>Спасибо</div>
        <div className='success__s-title h2'>Ваша заявка отправлена</div>
        <div className='success__t-title h3'>Вам придет смс</div>
      </div>
    )
  }
};

export default Success;
