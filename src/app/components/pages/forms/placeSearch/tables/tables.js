import React, { useState } from 'react'
import { Table, Input } from 'reactstrap'
import styles from './table.module.css'

const style = styles.row_selected

const DivisionTable = (props) => {
  const setDivision = (division, key) => {
    const elems = document.querySelectorAll('#division_table tr')
    elems.forEach(elem => {
      elem.classList.remove(style)
    })
    
    const selectedElem = document.getElementById(`division` + key)
    selectedElem.classList.add(style)
    props.setDivision(division)
  }

  const divisionElems = props.divisions.map((division, key) =>
    <tr
      key={key}
      id={`division` + key}
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

const PlacementTable = () => {
  return (
    <Table hover bordered size="sm">
      <thead>
        <tr>
          <th>Помещение</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Архив</td>
        </tr>
        <tr>
          <td>АСУП</td>
        </tr>
        <tr>
          <td>АХО</td>
        </tr>
        <tr>
          <td>БИОКАД</td>
        </tr>
      </tbody>
    </Table>
  )
}

export { DivisionTable, PlacementTable }