import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route } from "react-router-dom"
import Header from "../Components/Header"

export default function HomeTemplate(props) { //object, array, string, number, function, component
  // const { isLoading = useSelector(state => state.LoadingReducer) }
  // useEffect(() => {
  //   if (isLoading) {
  //     setTimeout(() => {
  //       dispatch({ type: "HIDE_LOADING" });
  //     }, 2000)
  //   }
  //   return () => {
  //     //trang hiện tại mở Loading
  //     dispatch({ type: "DISPLAY_LOADING" })
  //   }
  // })

  // const renderLoading = () => {
  //   if (isLoading) {
  //     return (
  //       <div style={{ position: fixed, width: "100%", height: "100%", top: 0, left: 0 }}>
  //         <div className="d-flex">Loading...</div>
  //       </div>
  //     )
  //   }
  //   return ''
  // }




  return (
    <Fragment>
      <Route path={props.path} exect render={(propsRoute) => {
        return <Fragment>
          {/* {renderLoading()} */}
          <Header></Header>
          <props.component {...propsRoute}></props.component>
        </Fragment>
      }} >
      </Route>
    </Fragment>

  )
}
