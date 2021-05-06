import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"

export default function DemoReduxApp() {



  //Trước đây chúng ta dùng mapStateToProps để connect với state ở trên redux
  //Tuy nhiên cách đó code khá dài,
  //Cho nên hôm nay chúng ta sẽ sử dụng useSelector để thay cho mapStateToProps

  let comments = useSelector(state => state.FakebookReducer.comments)
  console.log(comments);

  // Lấy hàm dispatch từ useDispatch => gửi dữ liệu lên reducer

  let dispatch = useDispatch()

  // Lấy thông tin người dùng nhập vào từ form
  let [userComment, setUserComment] = useState({
    name: "",
    comment: "",
    avatar: ""
  })
  console.log("userComment", userComment);

  const handleChange = (e) => {
    let { value, name } = e.target
    setUserComment({
      //Chúng ta phải clone lại object ở đây thì mới có thể lưu dữ liệu lại được.
      ...userComment,
      [name]: value
    })
  }


  //Xử lý thông tin người dùng nhập vào, submit dữ liệu để add vào mảng trên reducer

  const handleComment = (e) => {
    e.preventDefault() // chặn browser reload khi nhấn enter
    let newComment = { ...userComment, avatar: `https://i.pravatar.cc/60?u=${userComment.name}` }
    let action = {
      type: 'add_comment',
      userComment: newComment
    }
    dispatch(action)
  }
  return (
    <div className="container">
      <h3>Fakebook App</h3>
      <div className="card text-left">
        <div className="card-header">

          {comments.map((comment, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-2">
                  <img src={comment.avatar} alt="" />
                </div>
                < div className="col-10" >
                  <h5 className="text-danger">{comment.name}</h5>
                  <p>{comment.comment}</p>
                </div>
              </div>
            )
          })}

        </div>
        <form className="card-body" onSubmit={handleComment}>
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input className="form-control" name="name" onChange={handleChange} />

          </div>
          <div className="form-group">
            <h4 className="card-title">Comment</h4>
            <input className="form-control" name="comment" onChange={handleChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Send</button>
          </div>

        </form>
      </div>
    </div>
  )
}
