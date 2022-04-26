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
  Auth,
  UsersList,
  MaterielsList,
  Techniciens
} from '../Pages'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Materiel} />
        <Route path="/detail" component={Detail} />
        <Route path="/user" component={User} />
        <Route path="/technicien" component={Technicien} />
        <Route path="/listuser" component={UsersList} />
        <Route path="/listmateriel" component={MaterielsList} />
        <Route path="/listtechnicien" component={Techniciens} />
        <Route path="/auth" component={Auth} />
        <Route path="/oops" component={PageNotFound} />
        <Redirect to="/oops" />
      </Switch>
    </Router>
  )
}

export default Routes
