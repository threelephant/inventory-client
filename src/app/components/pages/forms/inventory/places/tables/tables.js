import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import styles from './table.module.css'
import servicesPlacement from '../../../../../../services/placement'
import resetTables from '../../utils/resetTables'

const style = styles.row_selected

const DivisionTable = (props) => {
  const setDivision = (division, key) => {
    resetTables()
    
    const selectedElem = document.getElementById(`division${key}`)
    selectedElem.classList.add(style)
    props.setDivision(division)
  }

  const divisionElems = props.divisions.map((division, key) =>
    <tr
      key={key}
      id={`division${key}`}
      onClick={() => setDivision(division, key)}
    >
      <td>
        {division}
      </td>
    </tr>
  )

  return (
    <Table id="division_table" hover bordered size="sm">
      <thead>
        <tr>
          <th>Отдел</th>
        </tr>
      </thead>
      <tbody>
        {divisionElems}
      </tbody>
    </Table>
  )
}

const PlacementTable = (props) => {
  const [ placements, setPlacements ] = useState([])

  const setPlace = (placement, key) => {
    const elems = document.querySelectorAll('#placement_table tr')
    elems.forEach(elem => {
      elem.classList.remove(style)
    })
    
    const selectedElem = document.getElementById(`placement${key}`)
    selectedElem.classList.add(style)
    props.setPlacement(placement)
  }

  const placeElems = placements.map((placement, key) =>
    <tr
      key={key}
      id={`placement${key}`}
      onClick={() => setPlace(placement, key)}
    >
      <td>
        {placement}
      </td>
    </tr>
  )

  useEffect(() => {
    servicesPlacement
      .get(props.division)
      .then(placementsLocal => {
        setPlacements(placementsLocal)
      })
  }, [props.division])

  return (
    <Table id="placement_table" hover bordered size="sm">
      <thead>
        <tr>
          <th>Помещение</th>
        </tr>
      </thead>
      <tbody>
        {placeElems}
      </tbody>
    </Table>
  )
}

export { DivisionTable, PlacementTable }