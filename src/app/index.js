import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Auth from './components/pages/auth'
import AddInventory from './components/pages/addInventory'
import ChangeInventory from './components/pages/changeInventory'
import ObjectSearchPage from './components/pages/objectSearch'
import PlaceSearch from './components/pages/placeSearch'
import BalanceReport from './components/pages/balanceReport'
import MotionReport from './components/pages/motionReport'
import AddDivision from './components/pages/addPlace/addDivision'
import AddPlacement from './components/pages/addPlace/addPlacement'

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" render={() => "hello world!"} />

        <Route path="/login" render={() => <Auth type="login" />} />
        <Route path="/register" render={() => <Auth type="register" />} />

        <Route exact path="/report" render={() => "report"} />
        <Route path="/report/balance" render={() => <BalanceReport />} />
        <Route path="/report/motion" render={() => <MotionReport />} />

        <Route exact path="/place" render={() => "place"} />
        <Route path="/place/search" render={() => <PlaceSearch />} />

        <Route exact path="/object" render={() => "object"} />
        <Route path="/object/search" render={() => <ObjectSearchPage />} />

        <Route path="/inventory/add" render={() => <AddInventory />} />
        <Route path="/inventory/change" render={() => <ChangeInventory />} />

        <Route path="/place/division" render={() => <AddDivision />} />
        <Route path="/place/placement" render={() => <AddPlacement />} />
      </Router>
    </div>
  )
}

export default App