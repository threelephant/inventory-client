import React from 'react'
import { Table } from 'reactstrap'
const SearchTable = ({ result }) => {
  const tableResult = result.map((obj, index) => {
    return (
      <tr key={`${index}`}>
        <td>{obj["object_id"]}</td>
        <td>{obj["name"]}</td>
        <td>{obj["barcode"]}</td>
        <td>{obj["division"]}</td>
        <td>{obj["placement"]}</td>
        <td>{obj["movement"]}</td>
        <td>{obj["movement_info"]}</td>
      </tr>
      )
  })

  return (
    <Table>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Название</th>
          <th>Штрих-код</th>
          <th>Отдел</th>
          <th>Помещение</th>
          <th>Описание движения</th>
          <th>Информация о движении</th>
        </tr>
      </thead>
      <tbody>
        {tableResult}
      </tbody>
    </Table>
  )
}

export default SearchTable