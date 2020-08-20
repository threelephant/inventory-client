import React from 'react'
import { Table } from 'reactstrap'

const ReportTable = ({ response }) => {

  if (Object.keys(response).length !== 0) {
    const tableResult = response.material_objects.map((obj, index) => {
      return (
        <tr key={`${index}`}>
          <td>{obj["date_operation"]}</td>
          <td>{obj["operation"]}</td>
          <td>{obj["placement"]}</td>
          <td>{obj["previous_placement"]}</td>
          <td>{obj["movement"]}</td>
          <td>{obj["movement_info"]}</td>
        </tr>
      )
    })

    return (
      <div>
        <h4 className="text-md-right">Дата отчета: {response.date}</h4>
        <h3 className="text-md-right">Инвентарный номер: {response.object_id}</h3>
        <h3 className="text-md-right">Название: {response.name}</h3>
        <Table>
          <thead>
            <tr>
              <th>Дата операции</th>
              <th>Операция</th>
              <th>Размещение</th>
              <th>Предыдущее размещение</th>
              <th>Описание движения</th>
              <th>Информация о движении</th>
            </tr>
          </thead>
          <tbody>
            {tableResult}
          </tbody>
        </Table>
      </div>
    )
  }

  return (
    <div></div>
  )
}

export default ReportTable