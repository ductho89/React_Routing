import React, { useState } from 'react'

// useState(): là hàm từ thư viện react thay thế cho this.state và this.setState cảu ReactClassComponent

export default function UseStateDemo(props) {

  // Trong một hàm có thể sử dụng nhiều useState để thay đổi nhiều state khác nhau
  const [state, setState] = useState({ number: 1 });
  const [number, setNumber] = useState(1)
  /**
    this.state = {
     number:1
   }
   */
  return (
    <div className="container">
      <h1 className="text-danger">Number: {number}</h1>
      <button className="btn btn-success" onClick={() => {
        setNumber(number + 1)
        // setState({
        //   number:state.number + 1
        // })
      }}>+</button>


      <h1>Number: {state.number}</h1>
      <button className="btn btn-success" onClick={() => {
        const newState = { number: state.number + 1 }
        setState(newState)
        // setState({
        //   number:state.number + 1
        // })
      }}>+</button>

    </div>
  )
}
