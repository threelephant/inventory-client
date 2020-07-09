import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Auth from './components/pages/auth'
import AddInventory from './components/pages/addInventory'
import PlaceSearch from './components/pages/placeSearch'

const SearchPage = () => {
  const [selectedDivision, setSelectedDivision] = useState('')
  const [selectedPlacement, setSelectedPlacement] = useState('')

  return (
    <div>
      <Route 
        path="/inventory/add" 
        render={() => <AddInventory
                       selectedDivision={selectedDivision}
                       selectedPlacement={selectedPlacement} 
                      />} 
      />
      <Route
        path="/place/search"
        render={() => <PlaceSearch 
                        setSelectedDivision={setSelectedDivision}
                        setSelectedPlacement={setSelectedPlacement}
                      />}
      />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" render={() => "hello world!"} />
        <Route path="/login" render={() => <Auth type="login" />} />
        <Route path="/register" render={() => <Auth type="register" />} />
        <Route path="/report" render={() => "report"} />
        <Route exact path="/place" render={() => "place"} />
        <Route exact path="/object" render={() => "object"} />
        <Route path="/object/search" render={() => "object"} />
        <SearchPage />
      </Router>
    </div>
  )
}

export default App