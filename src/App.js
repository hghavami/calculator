
import React, { Component } from 'react';
import styles from './App.module.css';
 
import ResultComponent from './Components/ResultComponent/ResultComponent';
import Keypads from './Components/Keypads/Keypads';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      firstVal: '',
      secondVal: '',
      result: '',
      operator: ''
    }
  }
 
keypadClick = (key) =>{
this.setState({
   input : this.state.input + key,
  
  })
}

opClick = (op) =>{
  if(op === '+'){
    this.setState({
      firstVal : this.state.input,
      input:'',
      operator : '+',
    
    })
  }

  if(op === '-'){
    this.setState({
      firstVal : this.state.input,
      input:'',
      operator : '-',
    })
  }

  if(op === '/'){
    this.setState({
      firstVal : this.state.input,
      operator : '/',
      input:'',

    })
  }

  if(op === '*'){
    this.setState({
      firstVal : this.state.input,
      operator : '*',
      input:'',

    })
  }
}

evaluateClick = () => {
this.state.secondVal = this.state.input;

if(this.state.operator === '+'){
  this.setState({
input : 
parseInt(this.state.firstVal)+ parseInt(this.state.secondVal)
  })
}

if(this.state.operator === '-'){
  this.setState({
input : 
parseInt(this.state.firstVal)- parseInt(this.state.secondVal)
  })
}

if(this.state.operator === '*'){
  this.setState({
input : 
parseInt(this.state.firstVal)* parseInt(this.state.secondVal)
  })
}

if(this.state.operator === '/'){
  this.setState({
input : 
parseInt(this.state.firstVal)/ parseInt(this.state.secondVal)
  })
}

}

clearClick = () =>{
  this.setState({
    input: '',
    firstVal : '',
    secondVal : '',
  })
}


render() {
    return (
      <div  className={styles.app}>
      { this.state.input }
      <br/>
      {this.state.result}
        {/* <ResultComponent input={this.state.input} /> */}
        <Keypads keypadHandle={this.keypadClick} opHandle={this.opClick} evaluateHandle={this.evaluateClick} clearHandle={this.clearClick}/>

      </div>
    );
  };
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//       firstVal: '',    // init first value
//       secondVal: '',   // init Second value
//       displayVal: '0',   // init Second value
//       operatorFlag: '', // initialise first value when false and then second value when true
//       memo: '',//use to keep log calculator
// otherValue: "wooow",
//       // display: [],
//       // result: [],
//       // saved :[],
//     };
//     this.keypadClick = this.keypadClick.bind(this);
//   }

//   keypadClick = (key) => {
// const {firstVal} = this.state;
//     var txt;
//     if (this.state.operatorFlag === "") {
//       txt = firstVal + key;

//       this.setState({
//         firstVal: txt,
//         displayVal: txt,
//       })
//       console.log(txt);
//     }

//     else {
//       txt = this.state.secondVal + key;
//       this.setState({
//         secondVal : txt,
//         displayVal : txt,
//       })
//       console.log(this.state.secondVal);
//     }

//   }

//   opClick = (op) => {
//     const {operatorFlag } = this.state;

//     var result;
//     // result =parseInt(this.state.FirstVal)+parseInt(this.state.SecondVal);



//      if (op==='='){
//          //alert ('switch->' +  this.state.operatorFlag );
//          switch(this.state.operatorFlag){
//            case'+' : result =parseInt(this.state.firstVal)+parseInt(this.state.secondVal); break;
//            case'-' : result =parseInt(this.state.firstVal)-parseInt(this.state.secondVal); break;
//            case'x' : result =parseInt(this.state.firstVal)*parseInt(this.state.secondVal); break;
//            case'/' : result =parseInt(this.state.firstVal)/parseInt(this.state.secondVal); break;
//            case'C' : this.cleanCalc(); break;
//        }


//          this.setState({
//            firstVal: '',    // init first value
//            secondVal: '',   // init Second value
//            displayVal:result,
//            operatorFlag:'',
//            memo: this.state.firstVal+ ' ' +this.state.operatorFlag + ' ' +this.state.secondVal,
//          });

//      }
//      else
//      {



//        this.setState({


//          operatorFlag:op,
//        });
//        keypadHandle();
//      }

//   }

//   render() {
//     return (
//       <div className={styles.app}>
//         <ResultComponent result={this.state.displayVal} />
//         <Keypads keypadHandle={this.keypadClick} opHandle={this.opClick} />

//       </div>
//     );
//   }
// }

// export default App;
