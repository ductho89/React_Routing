import React, { Component } from 'react'
import axios from "axios";
import { method } from 'lodash';

export default class DemoApiClass extends Component {

  state = {
    mangPhim: []
  }

  loadPhim = async () => {

    //Cách 1: sử dụng promise khi các dữ liệu trả về từ API không phụ thuộc vào nhau


    // //Hàm gọi api lấy dữ liệu do back-end trả về
    // const promise = axios({
    //   url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET"
    // })

    // //Ham xu ly du lieu khi goi request thanh cong
    // promise.then(result => {
    //   console.log(result);
    //   // console.log(result.data[0]);
    //   //sau khi có kết quả thì sẽ setState lại
    //   this.setState({
    //     mangPhim: result.data
    //   })

    // });
    // //Ham xu ly du lieu khi that bai
    // promise.catch(errors => {
    //   console.log(errors.response.data);
    // })

    //Cách 2: sử dụng async await
    // sử dụng khi các thành phần sau cần dữ liệu từ API
    //Sử dụng try catch sẽ bắt lỗi hiệu quả hơn
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET"
      })
      this.setState({
        mangPhim: result.data
      })
    } catch (errors) {
      console.log("errors", errors.response.data);
    }
  }




  renderPhim = () => {
    // console.log(this.state.mangPhim);
    return this.state.mangPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left mt-3" >
            <img className="card-img-top" style={{ height: 250, width: 200 }} src={phim.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text" style={{ height: 200 }}>{phim.moTa}</p>
            </div>
          </div>
        </div>
      )
    })
  }




  render() {
    return (
      <div className="container">
        {/* <button className="btn btn-success" onClick={() => {
          this.loadPhim()
        }}>Load danh sách phim</button> */}
        <h1 className="text-center">Danh Sách Phim</h1>

        <div className="row">
          {this.renderPhim()}
        </div>
      </div>
    )
  }
  //Tự động lấy dữ liệu từ API về khi vừa load trang
  componentDidMount() {
    this.loadPhim()
  }
}
