import React from 'react'
import Header from '../includes/header'
import PlaceSearchForm from './forms/placeSearch'
import { Container, Row, Col } from 'reactstrap'

const Title = () => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 1 }} className="mb-4">
        <h2>Поиск местоположения</h2>
      </Col>
    </Row>
  )
}

const Page = () => {
  return (
    <div>
      <Title />
      <PlaceSearchForm />
    </div>
  )
}

const placeSearch = () => {
  return (
    <div>
      <Header />
      <Container fluid className="mb-5">
        <Page />
      </Container>
    </div>
  )
}

export default placeSearch