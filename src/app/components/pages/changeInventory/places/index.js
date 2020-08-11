import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import services from '../../../../services/division'
import { DivisionTable, PlacementTable } from './tables/tables'

const PlaceSearchForm = ({ setDiv, setPlace, chosenDivision, setChosenDivision }) => {
  const [divisions, setDivisions] = useState([])
  const [divisionsEnglish, setDivisionsEnglish] = useState({})

  useEffect(() => {
    services
      .get()
      .then(divisionsLocal => {
        setDivisions(divisionsLocal)
      })
      .catch(() => {
        
      })
  }, [])

  useEffect(() => {
    services
      .getEnglish()
      .then(divisionsEnglishLocal => {
        setDivisionsEnglish(divisionsEnglishLocal)
      })
      .catch(() => {
        
      })
  }, [])

  const setDivision = (division) => {
    setChosenDivision(divisionsEnglish[division])
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
          divisionsEnglish={divisionsEnglish}
          setPlacement={setPlace}
        />
      </Col>
    </Row>
  )
}

export default PlaceSearchForm