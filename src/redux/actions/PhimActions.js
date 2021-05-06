
//Middleware

import axios from "axios"

// File nay se tong hop tat ca cac action cua ung dung

export const layDanhSachPhimApiAction = (maNhom) => {
  //Xử lý action trước khi đưa dữ liệu lên Reducer

  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        method: "GET"
      })
      //dispatch du lieu len Redux
      dispatch({
        type: "SET_MANG_PHIM",
        mangPhim: result.data
      })
    } catch (errors) {
      console.log("errors", errors);
    }
  }
}

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET"
      })
      dispatch({
        type: "SET_CHI_TIET_PHIM",
        chiTietPhim: result.data
      })
    } catch (errors) {
      console.log(errors);
    }
  }
}





