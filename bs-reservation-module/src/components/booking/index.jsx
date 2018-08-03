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
      data: [
        {
          id: '0',
          name: 'Абрамов Владлен Романович',
          description: 'Стоматолог',
          date: '12.08.2018',
          time: '08:00-09:00'
        },
        {
          id: '1',
          name: 'Белозёров Илларион Борисович',
          description: 'Терапевт',
          date: '18.08.2018',
          time: '10:00-11:00'
        },
        {
          id: '3',
          name: 'Мишин Давид Сергеевич',
          description: 'Педиатр',
          date: '10.08.2018',
          time: '12:00-13:00'
        },
        {
          id: '4',
          name: 'Рябов Игорь Львович',
          description: 'Рентгенолог',
          date: '16.08.2018',
          time: '9:00-10:00'
        },
        {
          id: '5',
          name: 'Якушев Александр Максимович',
          description: 'Психиатр',
          date: '12.08.2018',
          time: '14:00-15:00'
        },
        {
          id: '6',
          name: 'Хохлов Леон Дмитриевич',
          description: 'Врач функциональной диагностики',
          date: '13.08.2018',
          time: '11:00-12:00'
        },
        {
          id: '7',
          name: 'Овчинников Александр Евгеньевич',
          description: 'Офтальмолог',
          date: '12.08.2018',
          time: '12:00-13:00'
        },
        {
          id: '8',
          name: 'Абрамов Владлен Романович',
          description: 'Стоматолог',
          date: '12.08.2018',
          time: '10:00-11:00'
        },
        {
          id: '9',
          name: 'Белозёров Илларион Борисович',
          description: 'Терапевт',
          date: '18.08.2018',
          time: '15:00-16:00'
        },
        {
          id: '10',
          name: 'Мишин Давид Сергеевич',
          description: 'Педиатр',
          date: '10.08.2018',
          time: '16:00-17:00'
        },
        {
          id: '10',
          name: 'Рябов Игорь Львович',
          description: 'Рентгенолог',
          date: '16.08.2018',
          time: '18:00-19:00'
        },
        {
          id: '11',
          name: 'Якушев Александр Максимович',
          description: 'Психиатр',
          date: '12.08.2018',
          time: '19:00-20:00'
        },
        {
          id: '12',
          name: 'Хохлов Леон Дмитриевич',
          description: 'Врач функциональной диагностики',
          date: '13.08.2018',
          time: '16:00-17:00'
        },
        {
          id: '13',
          name: 'Овчинников Александр Евгеньевич',
          description: 'Офтальмолог',
          date: '12.08.2018',
          time: '13:00-14:00'
        },
        {
          id: '14',
          name: 'Абрамов Владлен Романович',
          description: 'Стоматолог',
          date: '12.08.2018',
          time: '13:00-14:00'
        },
        {
          id: '9',
          name: 'Белозёров Илларион Борисович',
          description: 'Терапевт',
          date: '18.08.2018',
          time: '18:00-19:00'
        },
        {
          id: '10',
          name: 'Мишин Давид Сергеевич',
          description: 'Педиатр',
          date: '10.08.2018',
          time: '17:00-18:00'
        },
        {
          id: '10',
          name: 'Рябов Игорь Львович',
          description: 'Рентгенолог',
          date: '16.08.2018',
          time: '19:00-20:00'
        },
        {
          id: '11',
          name: 'Якушев Александр Максимович',
          description: 'Психиатр',
          date: '12.08.2018',
          time: '21:00-22:00'
        },
        {
          id: '12',
          name: 'Хохлов Леон Дмитриевич',
          description: 'Врач функциональной диагностики',
          date: '13.08.2018',
          time: '18:00-19:00'
        },
        {
          id: '13',
          name: 'Овчинников Александр Евгеньевич',
          description: 'Офтальмолог',
          date: '12.08.2018',
          time: '15:00-16:00'
        },
      ],
      iData: [],
      pData: [],
      title: 'Выберите день,Выберите время,Выберите специалиста,Заполните форму'.split(','),
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
    this.searchDate = this.searchDate.bind(this);
    this.searchTime = this.searchTime.bind(this);
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
  searchDate(search) {
    const values = [];
    this.state.data.forEach((item, i) => {
      (item.date === search) && values.push(item);
    });

    return values;
  }
  searchTime(search) {
    const values = [];
    this.state.iData.forEach((item, i) => {
      (item.time === search) && values.push(item);
    });

    return values;
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
      iData: this.searchDate(date),
      resDate: date,
      dateFlag: true,
    });
  }
  // changeTime(timeFrom, timeTo) {
  changeTime(time) {
    // const time = timeFrom + '-' + timeTo;
    console.log(time);
    this.setState({
      iData: this.searchTime(time),
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
    const data = this.state.data,
          iData = this.state.iData,
          title = this.state.title,
          dateFlag = this.state.dateFlag,
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
        <div className='booking__content'>
          <div className='booking__title h2'>
            { (!dateFlag) && title[0] }
            { (dateFlag) && (!timeFlag) && title[1] }
            { (dateFlag) && (timeFlag) && (!nameFlag) && title[2] }
            { (dateFlag) && (timeFlag) && (nameFlag) && (!allFlag) && title[3] }
          </div>

          { <InfoBox data={dataInfo} allFlag={allFlag} /> }
          { (!dateFlag) && <Calendar changeDay={this.changeDay} data={data} />}
          { (dateFlag) && (!timeFlag) && <Times minTime={8} maxTime={22} changeTime={this.changeTime} data={iData} />}
          { (dateFlag) && (timeFlag) && (!nameFlag) && <Specialists changeName={this.changeName} data={iData} />}
          { (dateFlag) && (timeFlag) && (nameFlag) && (!allFlag) &&
            <Form
              changeUserName={this.changeUserName} changeUserSurname={this.changeUserSurname}
              changeUserEmail={this.changeUserEmail} changeUserPhone={this.changeUserPhone}
              changeUserText={this.changeUserText}
              resBid={this.resBid}
              />
          }
          { (allFlag) && <Success data={dataInfo} />}
        </div>

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
