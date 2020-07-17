import React, { useEffect } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Header from '../includes/header'
import MotionReportForm from './motionReportForm'

const MotionReportTitle = () => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 1 }} className="mb-4">
        <h2>Отчет по движениям</h2>
      </Col>
    </Row>
  )
}

const MotionReportPage = (props) => {
  return (
    <div>
      <MotionReportTitle />
      <MotionReportForm />
    </div>
  )
}

const MotionReport = (props) => {
  useEffect(() => {
    document.title = "Отчет по движениям"
  }, [])

  return (
    <div>
      <Header />
      <Container fluid className="mb-5">
        <MotionReportPage />
      </Container>
    </div>
  )
}

export default MotionReport