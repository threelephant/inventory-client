import React, { useEffect } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Header from '../includes/header'
import InventoryForm from './changeInventory/index'

const InventoryTitle = () => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 1 }} className="mb-4">
        <h2>Изменение инвертарной карточки</h2>
      </Col>
    </Row>
  )
}

const InventoryPage = (props) => {
  return (
    <div>
      <InventoryTitle />
      <InventoryForm />
    </div>
  )
}

const Inventory = (props) => {
  useEffect(() => {
    document.title = "Изменение инвертарных карточек"
  }, [])

  return (
    <div>
      <Header />
      <Container fluid className="mb-5">
        <InventoryPage />
      </Container>
    </div>
  )
}

export default Inventory