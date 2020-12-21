import React from "react"
import { Switch, Redirect, Route } from "react-router-dom";
import { Splash } from "./splash";

export const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Splash }/>
        <Redirect to ="/"/>
      </Switch>
    </div>
  )
}