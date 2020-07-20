import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const InventoryCategory = () => {
  return (
    <div>
      <h3>Инвентарные карточки</h3>
      <ListGroup>
        <ListGroupItem tag="a" href="/inventory/add">
          Добавление инвентарных карточек
      </ListGroupItem>
        <ListGroupItem tag="a" href="/inventory/change">
          Изменение инвентарных карточек
      </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default InventoryCategory