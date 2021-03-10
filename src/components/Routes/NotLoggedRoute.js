import React, { Fragment, useContext } from 'react'
import { Route, Redirect } from "react-router-dom"
import { Context } from  "./../../Store/AuthContext";

const NotLoggedRoute = ({ component: Component, ...rest }) => {
  const [state, dispatch] = useContext(Context);
  console.log(state.user)
  return (
    <Fragment>
      <Route {...rest} render={props => {
        if (state.user !== false) {
          return <Redirect to='/' />
        }

        return <Component {...rest } />
      }} />
    </Fragment>
  )
}

export default NotLoggedRoute