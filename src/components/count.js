import React, { Component } from 'react'

export class count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          count: 0
      }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    incrementWhenOdd = () => {
        if (this.state.count % 2 ===1){
            this.increment()
        }
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    incrementWhenAsync = () => {
        setTimeout(() => {
            this.increment()
        },1000)
    }

    render() {
      return (
        <div>
            <h1>我是计数器</h1>
            点击了多少次： {this.state.count}
            {" "}
            <button onClick={this.increment}>++</button>{" "}
            <button onClick={this.incrementWhenOdd}>increment when odd</button> {" "}
            <button onClick={this.decrement}>--</button>{" "}
            <button onClick={this.incrementWhenAsync}>async 增加</button>{" "}
        </div>
      )
    }
}

export default count
