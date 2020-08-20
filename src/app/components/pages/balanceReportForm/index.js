import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'reactstrap'
import servicesDivision from '../../../services/division'
import { Division, Placement } from './placeInputs'
import ReportTable from './tables/resultTable'
import { DivisionTable, PlacementTable } from './tables/tables'
import resetTables from './utils/resetTables'
import services from '../../../services/balanceReport'

const PlaceSearchForm = () => {
  const [item, setItem] = useState({})
  const [response, setResponse] = useState({})
  const [divisions, setDivisions] = useState([])
  const [chosenDivision, setChosenDivision] = useState('')
  const [divisionSearch, setDivisionSearch] = useState('')
  const [placementSearch, setPlacementSearch] = useState('')
  const [isDivisionSearchDisabled, setIsDivisionSearchDisabled] = useState(false)
  const [isPlacementSearchDisabled, setIsPlacementSearchDisabled] = useState(false)

  console.log(item)

  const setPlaceName = (name) => {
    const setPlaceValue = (value) => {
      setItem(previousItem => ({
        ...previousItem,
        [name]: value
      }))
    }

    return setPlaceValue
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const division = item.division
    const placement = item.placement

    if (!division || !placement) {
      return
    }

    services
      .get(division, placement)
      .then(response => {
        setResponse(response)
      })
      .catch(reason => {
      })
      .finally(onfinally => {
      })
  }

  const reset = () => {
    document.querySelector('form').reset()
    resetTables()
    setChosenDivision('')
    setItem({})
    setDivisionSearch('')
    setPlacementSearch('')
    setIsDivisionSearchDisabled(false)
    setIsPlacementSearchDisabled(false)
    setResponse({})
  }

  useEffect(() => {
    servicesDivision
      .get()
      .then(divisionsLocal => {
        setDivisions(divisionsLocal)
      })
      .catch(() => {

      })
  }, [])

  const setDivision = (division) => {
    setIsDivisionSearchDisabled(true)
    setIsPlacementSearchDisabled(false)
    setPlaceName("division")(division)
    setItem(prevItem => 
      Object.keys(prevItem)
        .filter(key => key !== "placement")
        .reduce((result, current) => {
          result[current] = prevItem[current]
          return result
        }, {})
    )
    setChosenDivision(division)
  }

  const setPlacement = (placement) => {
    setPlaceName("placement")(placement)
    setIsPlacementSearchDisabled(true)
  }

  const handleDivisionChange = (event) => {
    setDivisionSearch(event.target.value.toLowerCase())
  }

  const handlePlacementChange = (event) => {
    setPlacementSearch(event.target.value.toLowerCase())
  }

  return (
    <Form>
      <Row sm="1" md="2" className="mb-4">
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
            searched={placementSearch}
            setPlacement={setPlacement}
          />
          <Button
            color="primary"
            onClick={onSubmit}
          >
            Сформировать отчет
          </Button>{' '}
          <Button
           color="danger" 
           outline 
           onClick={reset}
          >
            Очистить
          </Button>
        </Col>
        <Col
          sm={{ order: 1, size: 12 }}
          md={{ order: 2, size: 3, offset: 1 }}
        >
          <h3 className="mb-3">Поиск</h3>
          <Division
            onChange={handleDivisionChange}
            isDisabled={isDivisionSearchDisabled}
          />
          <Placement
            onChange={handlePlacementChange} 
            isDisabled={isPlacementSearchDisabled}
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col md={{ offset: 1 }}>
          <ReportTable response={response} />
        </Col>
      </Row>
    </Form>
  )
}

export default PlaceSearchForm