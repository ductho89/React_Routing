import React, { useState, useEffect } from 'react'

import axios from "axios";

export default function DemoApiFunction() {
  const [mangPhim, setMangPhim] = useState([])

  useEffect(async () => {
    //hàm này sẽ chạy sau khi giao diện được render
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET"
      })
      setMangPhim(result.data)
    } catch (errors) {
      console.log("errors", errors.response.data);
    }
  }, [])


  const renderPhim = () => {
    return mangPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left mt-3" >
            <img className="card-img-top" width={200} height={250} src={phim.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text" style={{ height: 100 }}>{phim.moTa}</p>
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="container">
      <h1 className="text-center">Danh Sách Phim</h1>
      <div className="row">
        {renderPhim()}
      </div>
    </div>
  )
}
