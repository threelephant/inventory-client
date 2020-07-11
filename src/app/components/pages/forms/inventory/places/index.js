import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import services from '../../../../../services/division'
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

    setPlace(prevItem =>
      Object.keys(prevItem)
        .filter(key => key !== "placement")
        .reduce((result, current) => {
          result[current] = prevItem[current]
          return result
        }, {})
    )

    setDiv(prevItem => ({
      ...prevItem,
      "division": division
    }))
  }

  const setPlacement = (placement) => {
    setPlace(prevItem => ({
      ...prevItem,
      "placement": placement
    }))
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
          setPlacement={setPlacement}
        />
      </Col>
    </Row>
  )
}

export default PlaceSearchForm