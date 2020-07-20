import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const ReportCategory = () => {
  return (
    <div>
      <h3>Отчеты</h3>
      <ListGroup>
        <ListGroupItem tag="a" href="/report/balance">
          Отчет по остаткам
        </ListGroupItem>
        <ListGroupItem tag="a" href="/report/motion">
          Отчет по движениям
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default ReportCategory