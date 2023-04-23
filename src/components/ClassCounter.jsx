import React from "react";

class ClassCounter extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         count: 0
      }
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
   }

   increment() {
      this.setState({ count: this.state.count + 1 })
   }

   decrement() {
      this.setState({ count: this.state.count - 1 })
   }

   render() {
      return (
         <div>
            <button onClick={this.increment}>Plus</button>
            <button onClick={this.decrement}>Minus</button>
            <h1>{this.state.count}</h1>
         </div>
      )
   }
}

export default ClassCounter;