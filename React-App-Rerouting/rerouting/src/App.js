import React from "react"
import { Route, Switch } from "react-router-dom"

import HomePage from "./pages/HomePage"
import Episodes from "./pages/Episodes"

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/Episodes" component={Episodes} />
    </Switch>
  )
}