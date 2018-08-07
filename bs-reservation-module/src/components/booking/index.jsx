import React, { Component } from "react";
import InfoBox from "../infobox";
import Calendar from "../calendar";
import Times from "../times";
import Specialists from "../specialists";
import Status from "../status";
import Form from "../form";
import Success from "../success";
import "./booking.scss";

class Booking extends Component {
  constructor(){
    super();
    this.state = {
      resDate: '',
      resTime: '',
      resName: '',
      resDescription: '',
      dateFlag: false,
      timeFlag: false,
      nameFlag: false,
      allFlag: false,
      resUserName: '',
      resUserSurname: '',
      resUserEmail: '',
      resUserPhone: '',
      resUserText: '',
    }
    this.changeDay = this.changeDay.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changeUserSurname = this.changeUserSurname.bind(this);
    this.changeUserEmail = this.changeUserEmail.bind(this);
    this.changeUserPhone = this.changeUserPhone.bind(this);
    this.changeUserText = this.changeUserText.bind(this);
    this.resBid = this.resBid.bind(this);
  }
  changeUserName(event) {
    event.preventDefault();
    this.setState({resUserName: event.target.value});

    (event.target.value === '') ? event.target.classList.add('form__input--fail') : event.target.classList.remove('form__input--fail');
  }
  changeUserSurname(event) {
    event.preventDefault();
    this.setState({resUserSurname: event.target.value});

    (event.target.value === '') ? event.target.classList.add('form__input--fail') : event.target.classList.remove('form__input--fail');
  }
  changeUserEmail(event) {
    event.preventDefault();
    this.setState({resUserEmail: event.target.value});

    (event.target.value === '') ? event.target.classList.add('form__input--fail') : event.target.classList.remove('form__input--fail');
  }
  changeUserPhone(event) {
    event.preventDefault();
    this.setState({resUserPhone: event.target.value});

    (event.target.value === '') ? event.target.classList.add('form__input--fail') : event.target.classList.remove('form__input--fail');
  }
  changeUserText(event) {
    event.preventDefault();
    this.setState({resUserText: event.target.value});
  }
  resBid(event) {
    this.setState({
      allFlag: true,
    });

    console.log('resDate: ', this.state.resDate);
    console.log('resTime: ', this.state.resTime);
    console.log('resName: ', this.state.resName);
    console.log('resDescription: ', this.state.resDescription);
    console.log('resDate: ', this.state.resDate);
    console.log('resUserName: ', this.state.resUserName);
    console.log('resUserSurname: ', this.state.resUserSurname);
    console.log('resUserEmail: ', this.state.resUserEmail);
    console.log('resUserPhone: ', this.state.resUserPhone);
    console.log('resUserText: ', this.state.resUserText);
  }
  changeDay(date) {
    console.log(date);
    this.setState({
      resDate: date,
      dateFlag: true,
    });
  }
  // changeTime(timeFrom, timeTo) {
  changeTime(time) {
    // const time = timeFrom + '-' + timeTo;
    console.log(time);
    this.setState({
      resTime: time,
      timeFlag: true,
    });
  }
  changeName(name, description) {
    this.setState({
      resName: name,
      resDescription: description,
      nameFlag: true,
    });
  }
  render() {
    const dateFlag = this.state.dateFlag,
          timeFlag = this.state.timeFlag,
          nameFlag = this.state.nameFlag,
          allFlag = this.state.allFlag,
          dataInfo = [
            {
              name: 'Дата',
              info: this.state.resDate,
            },
            {
              name: 'Время',
              info: this.state.resTime,
            },
            {
              name: 'Имя',
              info: this.state.resName,
            },
          ];
    return (
      <div className='booking'>
        { <InfoBox data={dataInfo} allFlag={allFlag} /> }
        { (!dateFlag) && <Calendar changeDay={this.changeDay} />}
        { (dateFlag) && (!timeFlag) && <Times minTime={8} maxTime={22} changeTime={this.changeTime} />}
        { (dateFlag) && (timeFlag) && (!nameFlag) && <Specialists changeName={this.changeName} />}
        { (dateFlag) && (timeFlag) && (nameFlag) && (!allFlag) &&
          <Form
            changeUserName={this.changeUserName} changeUserSurname={this.changeUserSurname}
            changeUserEmail={this.changeUserEmail} changeUserPhone={this.changeUserPhone}
            changeUserText={this.changeUserText}
            resBid={this.resBid}
            />
        }
        { (allFlag) && <Success data={dataInfo} />}

        { (!dateFlag) && <Status percent={0} /> }
        { (dateFlag) && (!timeFlag) && <Status percent={25} /> }
        { (dateFlag) && (timeFlag) && (!nameFlag) && <Status percent={50} /> }
        { (dateFlag) && (timeFlag) && (nameFlag) && (!allFlag) && <Status percent={75} /> }
        { (allFlag) &&  <Status percent={100} /> }
      </div>
    );
  }
}

export default Booking;
