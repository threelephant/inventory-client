import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import styles from './table.module.css'
import services from '../../../../services/division'

const style = styles.row_selected

const DivisionTable = (props) => {
  const [divisions, setDivisions] = useState([])

  useEffect(() => {
    services
      .get()
      .then(divisionsLocal => {
        setDivisions(divisionsLocal)
      })
  }, [])

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
    props.setPlace(item => ({
      ...item,
      "division": division
    }))
  }

  const divisionElems = divisions.map((division, key) =>
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

export { DivisionTable }