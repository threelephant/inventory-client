import React from 'react'
import Header from '../includes/header'
import PlaceSearchForm from './placeSearch'
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

const Page = (props) => {
  return (
    <div>
      <Title />
      <PlaceSearchForm 
        setSelectedDivision={props.setSelectedDivision}
        setSelectedPlacement={props.setSelectedPlacement}
      />
    </div>
  )
}

const placeSearch = (props) => {
  return (
    <div>
      <Header />
      <Container fluid className="mb-5">
        <Page 
          setSelectedDivision={props.setSelectedDivision} 
          setSelectedPlacement={props.setSelectedPlacement}
        />
      </Container>
    </div>
  )
}

export default placeSearch