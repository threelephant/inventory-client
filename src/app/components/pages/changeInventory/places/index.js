import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import services from '../../../../services/division'
import { DivisionTable, PlacementTable } from './tables/tables'

const PlaceSearchForm = ({ setDiv, setPlace, chosenDivision, setChosenDivision }) => {
  const [divisions, setDivisions] = useState([])

  useEffect(() => {
    services
      .get()
      .then(divisionsLocal => {
        setDivisions(divisionsLocal)
      })
      .catch(() => {
        
      })
  }, [])

  const setDivision = (division) => {
    setChosenDivision(division)
    setPlace("")
    setDiv(division)
  }

  return (
    <Row>
      <Col>
        <DivisionTable
          divisions={divisions}
          setDivision={setDivision}
        />
      </Col>
      <Col>
        <PlacementTable
          division={chosenDivision}
          setPlacement={setPlace}
        />
      </Col>
    </Row>
  )
}

export default PlaceSearchForm