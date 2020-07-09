import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Header from '../includes/header'
import InventoryForm from './forms/inventory'

const InventoryTitle = () => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 1 }} className="mb-4">
        <h2>Добавление инвертарных карточек</h2>
      </Col>
    </Row>
  )
}

const InventoryPage = (props) => {
  return (
    <div>
      <InventoryTitle />
      <InventoryForm
        division={props.selectedDivision}
        placement={props.selectedPlacement} 
      />
    </div>
  )
}

const Inventory = (props) => {
  useEffect(() => {
    document.title = "Добавление инвертарных карточек"
  }, [])

  return (
    <div>
      <Header />
      <Container fluid className="mb-5">
        <InventoryPage 
          division={props.selectedDivision}
          placement={props.selectedPlacement}
        />
      </Container>
    </div>
  )
}

export default Inventory