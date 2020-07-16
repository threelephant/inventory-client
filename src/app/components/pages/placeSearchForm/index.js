import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from 'reactstrap'
import services from '../../../services/division'
import { Division, Placement } from './placeInputs'
import { DivisionTable, PlacementTable } from './tables/tables'

const PlaceSearchForm = () => {
  const [divisions, setDivisions] = useState([])
  const [chosenDivision, setChosenDivision] = useState('')
  const [divisionsEnglish, setDivisionsEnglish] = useState({})
  const [divisionSearch, setDivisionSearch] = useState('')
  const [placementSearch, setPlacementSearch] = useState('')

  useEffect(() => {
    services
      .get()
      .then(divisionsLocal => {
        setDivisions(divisionsLocal)
      })
  }, [])

  useEffect(() => {
    services
      .getEnglish()
      .then(divisionsEnglishLocal => {
        setDivisionsEnglish(divisionsEnglishLocal)
      })
  }, [])

  const setDivision = (division) => {
    const divEnglish = divisionsEnglish[division]
    setChosenDivision(divEnglish)
  }

  const handleDivisionChange = (event) => {
    setDivisionSearch(event.target.value.toLowerCase())
  }

  const handlePlacementChange = (event) => {
    setPlacementSearch(event.target.value.toLowerCase())
  }

  return (
    <Form>
      <Row sm="1" md="2">
        <Col
          sm={{ order: 2, size: 12 }}
          md={{ order: 1, size: 4, offset: 1 }}
        >
          <DivisionTable
            divisions={divisions}
            setDivision={setDivision}
            searched={divisionSearch}
          />
          <PlacementTable
            division={chosenDivision}
            divisionsEnglish={divisionsEnglish}
            searched={placementSearch}
          />
        </Col>
        <Col
          sm={{ order: 1, size: 12 }}
          md={{ order: 2, size: 3, offset: 1 }}
        >
          <h3 className="mb-3">Поиск</h3>
          <Division onChange={handleDivisionChange} />
          <Placement onChange={handlePlacementChange} />
        </Col>
      </Row>
    </Form>
  )
}

export default PlaceSearchForm