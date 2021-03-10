import React, { Fragment, useContext } from 'react'
import { Route, Redirect  } from "react-router-dom"
import { Context } from  "./../../Store/AuthContext";

const LoggedRoute = ({component: Component, ...rest }) => {
  const [state, dispatch] = useContext(Context);
  
  return (
    <Fragment>
      <Route {...rest} render={props => {
        if (!state.user) {
          return <Redirect to='/' />
        }

        return <Component {...rest } />
      }} />
    </Fragment>
  )
}

export default LoggedRoute