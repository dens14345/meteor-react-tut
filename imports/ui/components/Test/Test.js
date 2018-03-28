
import React, {Component} from 'react';
import moment from 'moment'

export default class Test extends Component{
   constructor(props){
      super(props);
      this.state = {
         tests: [
	         {name: "test1"},
	         {name: "test2"},
	         {name: "test3"}
         ]
      }
   }


   _time(){
		const time = moment("2018-03-27T20:49:37+08:00");
		// console.log(moment(time).format("MMM Do YY"));
		// console.log(moment("20111031", "").fromNow());
	   console.log(time.fromNow());
   }



   _renderTests(){
   	this.tests.map((test)=>{

	   })
   }

   render(){
      return (
         <div className="boxed-view">

		       <div className="card-panel hoverable">
	            <h1>Test Component</h1>
		         <button onClick={this._time.bind(this)}>Moment</button>
	         </div>
         </div>
      )
   }
}
