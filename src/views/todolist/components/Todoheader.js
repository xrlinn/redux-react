import React, { Component } from 'react'
import store from "../../../store"

export class Todoheader extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
      return (
        <div className="todd-header">
          <input type="text" value={store.getState()} />
          <button>添加Todo</button>
        </div>
      )
    }
}

export default Todoheader
