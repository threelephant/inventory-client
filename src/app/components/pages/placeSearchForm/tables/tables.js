import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import styles from './table.module.css'
import servicesPlacement from '../../../../services/placement'

const style = styles.row_selected

const DivisionTable = (props) => {
  const setDivision = (division, key) => {
    const elemsDivision = document.querySelectorAll('#division_table tr')
    const elemsPlacement = document.querySelectorAll('#placement_division tr')
    
    elemsDivision.forEach(elem => {
      elem.classList.remove(style)
    })

    elemsPlacement.forEach(elem => {
      elem.classList.remove(style)
    })
    
    const selectedElem = document.getElementById(`division` + key)
    selectedElem.classList.add(style)
    props.setDivision(division)
  }

  const filteredDivisions = props.divisions.filter(division => 
    division.toLowerCase().includes(props.searched)  
  )

  const divisionElems = filteredDivisions.map((division, key) =>
    <tr
      key={key}
      id={`division` + key}
      onClick={() => setDivision(division, key)}
      className={styles.tr_scroll}
    >
      <td className={styles.td_scroll}>
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
      <tbody className={styles.tbody_scroll}>
        {divisionElems}
      </tbody>
    </Table>
  )
}

const PlacementTable = (props) => {
  const [ placements, setPlacements ] = useState([])

  const setPlace = (placement, key) => {
    const elems = document.querySelectorAll('#placement_division tr')
    elems.forEach(elem => {
      elem.classList.remove(style)
    })
    
    const selectedElem = document.getElementById(`placement` + key)
    selectedElem.classList.add(style)
  }

  const filteredPlacements = placements.filter(placement => 
    placement.toLowerCase().includes(props.searched)  
  )

  const placeElems = filteredPlacements.map((placement, key) =>
    <tr
      key={key}
      id={`placement` + key}
      onClick={() => setPlace(placement, key)}
      className={styles.tr_scroll}
    >
      <td className={styles.td_scroll}>
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
    <Table id="placement_division" hover bordered size="sm">
      <thead>
        <tr>
          <th>Помещение</th>
        </tr>
      </thead>
      <tbody className={styles.tbody_scroll}>
        {placeElems}
      </tbody>
    </Table>
  )
}

export { DivisionTable, PlacementTable }