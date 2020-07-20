import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const OtherCategory = () => {
  return (
    <div>
      <h3>Остальное</h3>
      <ListGroup>
        <ListGroupItem tag="a" href="/place">
          Добавление отдела и помещения
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default OtherCategory