import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {

  const { tenDangNhap } = useSelector(state => state.NguoiDungReducer)
  // Để ý những thuộc tính có thêm của BS4 ở đây
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: "white", color: "black" }} className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
          </li>

          <li className="nav-item">
            {tenDangNhap.trim() != "" ? <NavLink to="/" className="nav-link">{tenDangNhap}</NavLink> : <NavLink className="nav-link" activeClassName="text-danger" activeStyle={{ backgroundColor: "white", color: "black" }} to="/login">Login</NavLink>}
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="text-danger" activeStyle={{ backgroundColor: "white", color: "black" }} to="/register">Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="text-danger" activeStyle={{ backgroundColor: "white", color: "black" }} to="/about">About</NavLink>
          </li>

          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</NavLink>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/demoUseState">Use State</NavLink>
              <NavLink className="dropdown-item" to="/demoUseEffect">Use Effect</NavLink>
              <NavLink className="dropdown-item" to="/apiclass">API Class</NavLink>
              <NavLink className="dropdown-item" to="/apifunction">API Function</NavLink>
              <NavLink className="dropdown-item" to="//detail/:id">Detail</NavLink>
              <NavLink className="dropdown-item" to="/demoReduxApp">Demo Redux App</NavLink>

            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav >
  )
}
