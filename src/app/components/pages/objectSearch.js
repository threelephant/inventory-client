import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Header from '../includes/header'
import ObjectSearchForm from './objectSearchForm'

const ObjectTitle = () => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 1 }} className="mb-4">
        <h2>Поиск материальных объектов</h2>
      </Col>
    </Row>
  )
}

const ObjectSearch = () => {
  return (
    <div>
      <ObjectTitle />
      <ObjectSearchForm />
    </div>
  )
}

const ObjectSearchPage = () => {
  return (
    <div>
      <Header />
      <Container fluid className="mb-5">
        <ObjectSearch />
      </Container>
    </div>
  )
}

export default ObjectSearchPage