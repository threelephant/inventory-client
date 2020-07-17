import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Auth from './components/pages/auth'
import AddInventory from './components/pages/addInventory'
import ChangeInventory from './components/pages/changeInventory'
import ObjectSearchPage from './components/pages/objectSearch'
import PlaceSearch from './components/pages/placeSearch'

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" render={() => "hello world!"} />

        <Route path="/login" render={() => <Auth type="login" />} />
        <Route path="/register" render={() => <Auth type="register" />} />

        <Route path="/report" render={() => "report"} />

        <Route exact path="/place" render={() => "place"} />
        <Route path="/place/search" render={() => <PlaceSearch />} />

        <Route exact path="/object" render={() => "object"} />
        <Route path="/object/search" render={() => <ObjectSearchPage />} />

        <Route path="/inventory/add" render={() => <AddInventory />} />
        <Route path="/inventory/change" render={() => <ChangeInventory />} />
      </Router>
    </div>
  )
}

export default App