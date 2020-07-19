import React, { useState } from 'react'
import { Form, FormGroup, Row, Col, Input, Button } from 'reactstrap'
import Message from '../../../includes/inputs/alerts'
import services from '../../../../services/places'

const AddDivision = () => {
  const [division, setDivision] = useState({})
  const [success, setSuccess] = useState(-1)
  const [errorMessage, setErrorMessage] = useState([])

  const setDiv = e => {
    const { name, value } = e.target
    setDivision(item => ({
      ...item,
      [name]: value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()

    if (division["division"] === undefined
      || division["division"] === "") {
        setErrorMessage(["Заполните отдел"])
      return
    }

    services
      .createDivision(division)
      .then(() => {
        setSuccess(1)
        setDivision({})
        setErrorMessage([])
        document.getElementsByName('division')[0].value = ""
      })
      .catch(() => {
        setSuccess(0)
      })
      .finally(() => {
        setTimeout(() => {
          setSuccess(-1)
        }, 4000)
      })
  }

  return (
    <Row>
      <Col sm="12" md={{ size: 4, offset: 1 }} className="mb-4">
        <Form>
          <FormGroup>
            <h5>Отдел</h5>
            <Input
              onChange={setDiv}
              name="division"
            />
          </FormGroup>
          <FormGroup>
            <Button
              onClick={onSubmit}
              color="primary"
            >
              Добавить
            </Button>
          </FormGroup>
        </Form>
      </Col>
      <Col md={{ size: 4, offset: 1 }}>
        <Message
          success={success}
          error={errorMessage}
        />
      </Col>
    </Row>
  )
}

export default AddDivision