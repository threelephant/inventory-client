import React from 'react'
import Header from '../includes/header'
import { Container, Row, Col, Media } from 'reactstrap'
import InventoryCategory from '../includes/categories/inventory'
import ReportCategory from '../includes/categories/report'
import SearchCategory from '../includes/categories/search'
import OtherCategory from '../includes/categories/other'

const MainPage = () => {
  return (
    <div>
      <Header />
      <Container fluid className="mb-5">
        <Media>
          <Media left>
            <a href="/">
              <img
                src="logo192.png"
                className="img-fluid"
                alt="inventory logo"
              />
            </a>
          </Media>
          <Media body className="ml-lg-5">
            <Media heading className="mb-4">
              <div className="display-4">Система инвентаризации</div>
            </Media>
            <Row>
              <Col lg={{ size: 4 }} className="mb-4">
                <InventoryCategory />
              </Col>
              <Col lg={{ size: 4 }} className="mb-4">
                <ReportCategory />
              </Col>
            </Row>
            <Row>
              <Col lg={{ size: 4 }} className="mb-4">
                <SearchCategory />
              </Col>
              <Col lg={{ size: 4 }} className="mb-4">
                <OtherCategory />
              </Col>
            </Row>
          </Media>
        </Media>
      </Container>
    </div>
  )
}

export default MainPage