import React, { Fragment } from 'react'
import { Route } from 'react-router'
import Header from "../Components/Header"

export default function LoginTemplate(props) {
  return (
    <Fragment>
      <Route path={props.path} exact render={(propsRoute) => {
        return <Fragment>
          <div className="row">
            <div className="col-6">
              <img src="https://picsum.photos/500"
                alt="" />
            </div>
            <div className="col-6">
              <props.component {...propsRoute}></props.component>
            </div>
          </div>
        </Fragment>
      }}>
      </Route>
    </Fragment>
  )
}
