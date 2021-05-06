// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Router } from "react-router-dom"
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Components/Header';
import About from './Pages/About/About';
import Register from './Pages/Register/Register';
import UseStateDemo from './Pages/Hook/UseStateDemo/UseStateDemo';
import UseEffectDemo from './Pages/Hook/UseEffectDemo/UseEffectDemo';
import DemoApiClass from './Pages/DemoApi/DemoApiClass';
import DemoApiFunction from './Pages/DemoApi/DemoApiFunction';
import DemoReduxApp from './Pages/Hook/useSelector_useDispatch/DemoReduxApp';
import Detail from './Pages/Detail/Detail';
import { Fragment } from 'react';
import HomeTemplate from './Templates/HomeTemplate';
import LoginTemplate from './Templates/LoginTemplate';


//Cấu hình chuyển hướng trang trên Route
//Thay thế cho BrowserRouter
import { createBrowserHistory } from "history"
export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      < div className="App">
        <Switch>

          {/* Bởi vì không phải trang nào cũng cần tất cả những thành phần
          nên chúng ta chia nhỏ thành những Template khác nhau, bao gồm những thành phần khác nhau  */}
          <HomeTemplate path="/home" component={Home}></HomeTemplate>
          <HomeTemplate path="/detail/:id" component={Detail}></HomeTemplate>
          <LoginTemplate path="/login" component={Login}></LoginTemplate>
          {/* <HomeTemplate path="/login" component={Login}></HomeTemplate> */}
          <LoginTemplate path="register" component={Register}></LoginTemplate>

          {/* chúng ta set trang mặc định ở đây khi người dùng truy cập */}
          <Route path="/about" component={About}></Route>
          {/* <Route path="/register" component={Register}></Route> */}
          <Route path="/demoUseState" component={UseStateDemo}></Route>
          <Route path="/demoUseEffect" component={UseEffectDemo}></Route>
          {/* <Route path="/apiclass" exact component={DemoApiClass}></Route> */}
          <Route path="/apifunction" exact component={DemoApiFunction}></Route>

          <Route path="/demoReduxApp" exact component={DemoReduxApp}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
