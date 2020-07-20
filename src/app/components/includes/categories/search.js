import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const SearchCategory = () => {
  return (
    <div>
      <h3>Поиск</h3>
      <ListGroup>
        <ListGroupItem tag="a" href="/search/object">
          Поиск материальных объектов
        </ListGroupItem>
        <ListGroupItem tag="a" href="/search/place">
          Поиск отделов и помещений
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default SearchCategory