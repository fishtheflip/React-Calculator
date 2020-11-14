import React, { Component } from 'react'
import './app.css'
import CalcLab from '../calclab/calclab';
import Field from '../field/field';
import BtnField from '../btnfield/btnfield';


export default class App extends Component {
  state = {
    //Default number
    beg: 0,
    //State in Buttons
    first: {
      firbtn: '7',
      secbtn: '8',
      thrbtn: '9',
      fourbtn: '%'},
    second: {
      firbtn: '4',
      secbtn: '5',
      thrbtn: '6',
      fourbtn: '*'
    },
    third:{
      firbtn: '1',
      secbtn: '2',
      thrbtn: '3',
      fourbtn: '-'
    },
    forth: {
      zero: '0',
      plus: '+'
    },
    //Style on button
    style:{
      firbtn: 'firstybtn'
    }



  }
  render() {
    return (
      <div className="app">
        <CalcLab  />
        <Field begginin={this.state.beg}/>
        <BtnField fl={this.state.first} stl="firtsst" />
        <BtnField fl={this.state.second}/>
        <BtnField fl={this.state.third}/>
        
      </div>
    );
  }
}



