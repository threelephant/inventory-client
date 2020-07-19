import React, { useState } from 'react'
import { Form, FormGroup, Row, Col, Input, Button } from 'reactstrap'
import Message from '../../../includes/inputs/alerts'
import services from '../../../../services/places'
import { DivisionTable } from '../tables/tables'
import resetTables from '../utils/resetTables'

const AddPlacement = () => {
  const [placement, setPlacement] = useState({})
  const [success, setSuccess] = useState(-1)
  const [errorMessage, setErrorMessage] = useState([])

  const setPlace = e => {
    const { name, value } = e.target
    setPlacement(item => ({
      ...item,
      [name]: value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()

    const errors = []

    if (placement["division"] === undefined
      || placement["division"] === "") {
        errors.push("Заполните отдел")
    }

    if (placement["placement"] === undefined
      || placement["placement"] === "") {
        errors.push("Заполните помещение")
    }

    if (errors.length !== 0) {
      setErrorMessage(errors)
      return
    }

    services
      .createPlacement(placement)
      .then(() => {
        setSuccess(1)
        document.getElementsByName('placement')[0].value = ""
        resetTables()
        setPlacement({})
        setErrorMessage([])
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
          <h5>Помещение</h5>
          <FormGroup>
            <h6>Название помещения</h6>
            <Input
              onChange={setPlace}
              name="placement"
            />
          </FormGroup>
          <h6>Выберите отдел, в котором находится помещение</h6>
          <DivisionTable
            setPlace={setPlacement}
          />
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

export default AddPlacement