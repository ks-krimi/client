import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {
  User,
  Detail,
  Materiel,
  PageNotFound,
  Technicien,
  Auth
} from '../Pages'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Materiel} />
        <Route path="/detail" component={Detail} />
        <Route path="/user" component={User} />
        <Route path="/technicien" component={Technicien} />
        <Route path="/auth" component={Auth} />
        <Route path="/oops" component={PageNotFound} />
        <Redirect to="/oops" />
      </Switch>
    </Router>
  )
}

export default Routes
