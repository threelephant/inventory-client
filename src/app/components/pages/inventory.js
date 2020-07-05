import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Header from '../includes/header'
import InventoryForm from './forms/inventory'

const InventoryTitle = () => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 1 }} className="mb-4">
        <h2>Изменение инвертарных карточек</h2>
      </Col>
    </Row>
  )
}

const InventoryPage = () => {
  return (
    <div>
      <InventoryTitle />
      <InventoryForm />
    </div>
  )
}

const Inventory = () => {
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