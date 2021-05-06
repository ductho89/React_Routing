//Để khi reload lại không bị mất tên đăng nhập, mình có thể set thời gian cho cái cookies này sao
let tenDN = ""
if (localStorage.getItem("userLogin")) {
  let userLogin = JSON.parse(localStorage.getItem("userLogin"))
  tenDN = userLogin.taiKhoan
}



const stateDefault = {
  tenDangNhap: tenDN
}

export const NguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "XU_LY_DANG_NHAP_THANH_CONG": {
      state.tenDangNhap = action.tenDangNhap;
      return { ...state }
    }
    default: return { ...state }
  }
}