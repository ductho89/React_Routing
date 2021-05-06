import React, { useEffect } from 'react'
import { useState, useDispatch, useSelector } from "react-redux"
import { layThongTinPhimAction } from "../../redux/actions/PhimActions"

export default function Detail(props) {
  //props.history, props.location, props.match: khi component laod ra từ thẻ <Route?
  const { chiTietPhim } = useSelector(state => state.PhimReducer)
  console.log(chiTietPhim)
  // Khai báo dispatcher
  const dispatch = useDispatch()
  //lấy tham số từ url id
  const id = props.match.params.id

  useEffect(() => {
    dispatch(layThongTinPhimAction(id))
  }, [])

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <img className="w-100" src={chiTietPhim.hinhAnh} alt={chiTietPhim.tenPhim} />
        </div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th>
                  Tên phim
                </th>
                <th>
                  {chiTietPhim.tenPhim}
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}
