import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class DatepickerTest extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2019-06-29"}
  }

  render(){
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2000-01-01"
        maxDate="2100-12-31"
        confirmBtnText="確認"
        cancelBtnText="取消"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}