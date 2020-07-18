import React from 'react'
import { Table } from 'reactstrap'

const ReportTable = ({ response }) => {

  if (Object.keys(response).length !== 0) {
    const tableResult = response.material_objects.map((obj, index) => {
      return (
        <tr key={`${index}`}>
          <td>{obj["object_id"]}</td>
          <td>{obj["name"]}</td>
          <td>{obj["movement"]}</td>
          <td>{obj["movement_info"]}</td>
        </tr>
      )
    })

    return (
      <div>
        <h4 className="text-md-right">Дата отчета: {response.date}</h4>
        <h3 className="text-md-right">Отдел: {response.division}</h3>
        <h3 className="text-md-right">Помещение: {response.placement}</h3>
        <Table>
          <thead>
            <tr>
              <th>Номер объекта</th>
              <th>Название</th>
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