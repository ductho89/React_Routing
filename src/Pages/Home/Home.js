import React from 'react'
import { connect, useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useEffect } from 'react';
import { layDanhSachPhimApiAction } from '../../redux/actions/PhimActions';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd';

export default function Home(props) {
  // useSelector: get state from redux
  const { mangPhim } = useSelector(state => state.PhimReducer)
  console.log(mangPhim);
  const dispatch = useDispatch()

  //hàm này sẽ chạy sau khi giao diện được render
  useEffect(async () => {


    //action bắt buộc
    // 1: object = {type:"",data}
    // 2: function hoặc async function
    dispatch(layDanhSachPhimApiAction('GP01'))

  }, [])


  const renderPhim = () => {
    return mangPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left mt-3" >
            <img className="card-img-top" width={200} height={250} src={phim.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text" style={{ height: 200 }}>{phim.moTa}</p>
              <NavLink className="btn btn-danger" to={`/detail/${phim.maPhim}`}>Đặt vé</NavLink>
            </div>
          </div>
        </div>
      )
    })
  }


  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  // props ở đây dùng để tương tác với thanh url
  return (
    <div className="container">
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img src="https://picsum.photos/2000" className="w-100" alt="123" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <h1 className="text-center">Danh Sach Phim</h1>
      <div className="row">
        {renderPhim()}
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     mangPhim: state.PhimReducer.mangPhim
//   }
// }
// export default connect(mapStateToProps){ Home }