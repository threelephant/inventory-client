import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from 'reactstrap'
import services from '../../../../services/divisions'
import { Division, Placement } from './placeInputs'
import { DivisionTable, PlacementTable } from './tables/tables'

const PlaceSearchForm = () => {
  const [ divisions, setDivisions ] = useState([])
  const [ chosenDivision, setChosenDivision ] = useState('')

  useEffect(() => {
    services
      .get()
      .then(divisionsLocal => {
        setDivisions(divisionsLocal)
      })
  }, [])

  const setDivision = (division) => {
    setChosenDivision(division)
  
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
            setDivision={setChosenDivision} 
          />
          <PlacementTable />
        </Col>
        <Col
          sm={{ order: 1, size: 12 }}
          md={{ order: 2, size: 3, offset: 1 }}
        >
          <Division />
          <Placement />
        </Col>
      </Row>
    </Form>
  )
}

export default PlaceSearchForm