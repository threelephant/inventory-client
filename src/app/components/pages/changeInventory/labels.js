import React from 'react'
import { Table } from 'reactstrap'

const Labels = ({ item }) => {
  return (
    <Table>
      <tbody>
        <tr><th>Инвентарный номер</th><td>{item.object_id}</td></tr>
        <tr><th>Название</th><td>{item.name}</td></tr>
        <tr><th>Описание</th><td>{item.description}</td></tr>
        <tr><th>Штрих-код</th><td>{item.barcode}</td></tr>
        <tr><th>Текущий отдел</th><td>{item.division}</td></tr>
        <tr><th>Текущее помещение</th><td>{item.placement}</td></tr>
        <tr><th>Последняя операция</th><td>{item.operation}</td></tr>
        <tr><th>Описание последнего движения объекта</th><td>{item.movement}</td></tr>
        <tr><th>Доп. инфо последнего движения объекта</th><td>{item.movement_info}</td></tr>
        <tr><th>Дата операции</th><td>{item.date ? new Date(item.date).toDateString() : ""}</td></tr>
      </tbody>
    </Table>
  )
}

export default Labels