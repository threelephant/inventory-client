import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './components/pages/auth'
import AddInventory from './components/pages/addInventory'
import MainPage from './components/pages/mainPage'
import ChangeInventory from './components/pages/changeInventory'
import ObjectSearchPage from './components/pages/objectSearch'
import PlaceSearch from './components/pages/placeSearch'
import BalanceReport from './components/pages/balanceReport'
import MotionReport from './components/pages/motionReport'
import AddPlace from './components/pages/addPlace/addPlace'
import PlugPage from './components/pages/plug'
import ErrorPage from './components/pages/404'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />

          <Route path="/login" render={() => <Auth type="login" />} />
          <Route path="/register" render={() => <Auth type="register" />} />

          <Route exact path="/report" render={() => <PlugPage type="report" />} />
          <Route path="/report/balance" render={() => <BalanceReport />} />
          <Route path="/report/motion" render={() => <MotionReport />} />

          <Route exact path="/place" render={() => <AddPlace />} />

          <Route exact path="/search" render={() => <PlugPage type="search" />} />
          <Route path="/search/place" render={() => <PlaceSearch />} />
          <Route path="/search/object" render={() => <ObjectSearchPage />} />

          <Route exact path="/inventory" render={() => <PlugPage type="inventory" />} />
          <Route path="/inventory/add" render={() => <AddInventory />} />
          <Route path="/inventory/change" render={() => <ChangeInventory />} />
          <Route render={() => <ErrorPage />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App