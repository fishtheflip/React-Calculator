import React, { Component } from 'react'
import './app.css'
import CalcLab from '../calclab/calclab';
import Field from '../field/field';
import BtnField from '../btnfield/btnfield';


export default class App extends Component {
  state = {
    //Default number
    beg: ' ',
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
    let btnValue = e.target.getAttribute('name');
    console.log(btnValue);
    console.log(this.state.beg);
    if(btnValue === 'C'){
      this.setState({beg: ' '});
      
    }   
    if(btnValue !== 'C' && btnValue !== '='){

      this.setState({beg: this.state.beg + btnValue});
    }
    if(btnValue === "="){
      try {
        if(this.state.beg === ' '){
          return null;
        } else{
          let finSum = eval(this.state.beg);
          this.setState({beg: finSum});
        }

      } catch (err) {
        this.setState({beg: 'Error'});
        setTimeout(()=> this.setState({beg: ' '}), 1500);
      }
    }

    
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



