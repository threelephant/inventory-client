import React from 'react'
import Header from '../includes/header'
import { Container, Row, Col, Media } from 'reactstrap'
import InventoryCategory from '../includes/categories/inventory'
import ReportCategory from '../includes/categories/report'
import SearchCategory from '../includes/categories/search'

const PageType = ({ type }) => {
  switch (type) {
    case 'inventory': return <InventoryCategory />
    case 'report': return <ReportCategory />
    case 'search': return <SearchCategory />
    default: return "error"
  }
}

const Page = ({ type }) => {
  return (
    <div>
      <Header />
      <Container fluid className="mb-5">
        <Row>
          <Col lg={{size: 4}}>
            <PageType type={type} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Page