import axios from "axios"
import { history } from "../../App"
import { ACCESSTOKEN, USER_LOGIN } from "../../util/setting"
export const dangNhapAction = (userLogin) => { //{taiKhoan:"", matKhau:""}
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: userLogin
      })
      console.log("result", result.data);
      dispatch({
        type: "XU_LY_DANG_NHAP_THANH_CONG",
        tenDangNhap: result.data.taiKhoan
      })

      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data))
      localStorage.setItem(ACCESSTOKEN, result.data)
      alert("Đăng nhập thành công")
      //Khi đăng nhập thành công thì mình sẽ bay về trang chủ
      history.push("/")
    } catch (errors) {
      console.log("errors", errors.response?.data);

    }
  }
}

export const datVe = (thongTinDatVe) => {
  return async (dispatch) => {
    try {
      let result = axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        method: 'post',
        data: thongTinDatVe,
        headers: { 'Authorization': "Bearer" + localStorage.getItem(ACCESSTOKEN) }
      })
      console.log(result.data);

    } catch (errors) {

    }
  }
}