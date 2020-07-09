import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'reactstrap'
import services from '../../../../services/division'
import { Division, Placement } from './placeInputs'
import { DivisionTable, PlacementTable } from './tables/tables'

const PlaceSearchForm = (props) => {
  const [divisions, setDivisions] = useState([])
  const [chosenDivision, setChosenDivision] = useState('')
  const [chosenPlacement, setChosenPlacement] = useState('')
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
    setChosenPlacement('')
    const divEnglish = divisionsEnglish[division]
    setChosenDivision(divEnglish)
  }

  const handleDivisionChange = (event) => {
    setDivisionSearch(event.target.value.toLowerCase())
  }

  const handlePlacementChange = (event) => {
    setPlacementSearch(event.target.value.toLowerCase())
  }

  const onClick = (e) => {
    e.preventDefault()
    props.setSelectedDivision(chosenDivision)
    props.setSelectedPlacement(chosenPlacement)
  }

  return (
    <Form>
      <Row sm="1" md="2">
        <Col
          sm={{ order: 2, size: 12 }}
          md={{ order: 1, size: 4, offset: 1 }}
        >
          <Button
            className="mb-3"
            onClick={onClick}
          >
            Выбрать
          </Button>
          <DivisionTable
            divisions={divisions}
            setDivision={setDivision}
            searched={divisionSearch}
          />
          <PlacementTable
            division={chosenDivision}
            divisionsEnglish={divisionsEnglish}
            setPlacement={setChosenPlacement}
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