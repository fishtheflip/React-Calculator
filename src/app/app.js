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
      fourbtn: '/'},
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
      firbtn: '0',
      secbtn: 'C',
      thrbtn: '=',
      fourbtn: '+'


    },
    //Style on button
    id:{
      firstbtn: 'firstspecial',
      secondbtn: 'secondspecial',
      thirdbtn: 'thirdspecial',
      fourbtn: 'fourspecial'
    }
    


  }
  tookNumber = (e) =>{
    let sum = document.querySelector('.beg').getAttribute('value');
    let name = e.target.getAttribute('name');
    // if(name === 0){

    // }
    
    // document.form.calcscreen.value = document.form.calcscreen.value + name ;
    console.log(sum, ' ', name);
  }

  render() {
    return (
      <div className="app">
        <CalcLab  />
        <Field begginin={this.state.beg}/>
        <BtnField fl={this.state.first} stl="firtsst" stylebtn={this.state.id} onTook={this.tookNumber} />
        <BtnField fl={this.state.second} stl="secsst" stylebtn={this.state.id} onTook={this.tookNumber} />
        <BtnField fl={this.state.third} stl="thirdsst" stylebtn={this.state.id} onTook={this.tookNumber} />
        <BtnField fl={this.state.forth} stl="fourthsst" stylebtn={this.state.id} onTook={this.tookNumber} />
        
      </div>
    );
  }
}



