import React, { useEffect } from 'react'
import Header from '../../includes/header'
import { Container, Form, FormGroup, Row, Col } from 'reactstrap'

const AddPlacement = (props) => {
  useEffect(() => {
    document.title = "Добавление помещения"
  }, [])

  return (
    <div>
      <Header />
      <Container fluid className="mb-5">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 1 }} className="mb-4">
            <h2>Добавление помещения</h2>
          </Col>
        </Row>
        <Form>
          <FormGroup>

          </FormGroup>
        </Form>
      </Container>
    </div>
  )
}

export default AddPlacement