import React, { useState, useEffect } from 'react'
import services from '../../../../../services/division'
import { DivisionTable, PlacementTable } from './tables/tables'
import division from '../../../../../services/division'

const PlaceSearchForm = ({ setDiv, setPlace }) => {
  const [divisions, setDivisions] = useState([])
  const [chosenDivision, setChosenDivision] = useState('')
  const [chosenPlacement, setChosenPlacement] = useState('')
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
    setChosenPlacement('')
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
    <div>
      <DivisionTable
        divisions={divisions}
        setDivision={setDivision}
      />
      <PlacementTable
        division={chosenDivision}
        divisionsEnglish={divisionsEnglish}
        setPlacement={setPlacement}
      />
    </div>
  )
}

export default PlaceSearchForm