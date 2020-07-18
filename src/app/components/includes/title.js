import React from 'react'
import { Row, Col } from 'reactstrap'

const Title = ({ title }) => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 1 }} className="mb-4">
        <h2>{title}</h2>
      </Col>
    </Row>
  )
}

export default Title