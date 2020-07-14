import React from 'react'
import { Form, Row, Col } from 'reactstrap'

const InventoryForm = () => {
  return (
    <Form>
      <Row sm="1" md="2">
        <Col sm="12" md={{ size: 5, offset: 1 }}>
          
        </Col>
        <Col md={{ size: 2, offset: 1 }}>
        </Col>
      </Row>
    </Form>
  )
}

export default InventoryForm