import React, { useState, useEffect } from 'react'

export default function UseEffectDemo(props) {
  const [number, setNumber] = useState(1)
  // thay thế cho lifecycle ComponentDidMount và componentDidUpdate

  // Case 1 của useEffect
  useEffect(() => {
    // Gọi sau mỗi lần render kể cả lần đầu tiên
    console.log("Thay thế 2 lifecycle componentDidMount và componentDidUpdate");
    // Hạn chế setState
  })

  // Case 2 của useEffect
  useEffect(() => {
    //call API
    //Sửa carousel, thư viện khác
    console.log("componentDidMount");
    return () => {
      // hàm này sẽ được thực thi trước khi component mất khỏi giao diện
      console.log("componentWillUnmount");
    }
  }, [])

  // Case 3 của useEffect
  useEffect(() => {
    // Gọi sau mỗi lần render kể cả lần đầu tiên
    console.log("Hàm này sẽ được gọi mỗi khi number ( state) thay đổi sau khi component đã được render (thay cho componentDidUpdate");
    // Hạn chế setState
  }, [number])
  // đặt biến number vào đây
  return (
    <div>
      useEffect
      <h1>{number}</h1>
      <button className="btn btn-success" onClick={() => {
        setNumber(number + 1)
      }}>+</button>


    </div >
  )
}
