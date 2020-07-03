import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Auth from './components/pages/auth'

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" render={() => "hello world!"} />
        <Route path="/login" render={() => <Auth type="login" />} />
        <Route path="/register" render={() => <Auth type="register" />} />
        <Route path="/inventory" render={() => "inventory"} />
        <Route path="/report" render={() => "report"} />
        <Route path="/place" render={() => "place"} />
        <Route path="/object" render={() => "object"} />
      </Router>
    </div>
  )
}

export default App