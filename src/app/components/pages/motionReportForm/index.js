import React, { useState } from 'react'
import { Form, Row, Col } from 'reactstrap'
import Operations from '../../includes/inputs/operations'
import { Number, Dates } from './inputs'
import Buttons from './buttons'
import Message from '../../includes/inputs/alerts'
import ReportTable from './table'
import services from '../../../services/motionReport'
import Valid from './utils/validation'

const MotionReportForm = () => {
  const [item, setItem] = useState({ operation: "Списание" })
  const [response, setResponse] = useState({})
  const [success, setSuccess] = useState(-1)
  const [errorMessage, setErrorMessage] = useState([])

  console.log(item)

  const handleChange = e => {
    const { name, value } = e.target
    setItem(previousItem => ({
      ...previousItem,
      [name]: value
    }))
  }

  const reset = () => {
    setItem({ operation: "Списание" })
    document.querySelector('form').reset()
    setErrorMessage([])
    setResponse([])
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errors = Valid(item)

    if (errors.length !== 0) {
      setErrorMessage(errors)
      return
    }

    services
      .send(item)
      .then(response => {
        // setResponse(response)
        setSuccess(1)
        setErrorMessage([])
        setItem({ operation: "Списание" })
      })
      .catch(reason => {
        setSuccess(0)
      })
      .finally(onfinally => {
        setTimeout(() => {
          setSuccess(-1)
        }, 4000)
      })

    services
      .resTest()
      .then(response => {
        setResponse(response)
      })
      .catch(reason => {
      })
      .finally(onfinally => {
      })
  }

  console.log(response)

  return (
    <div>
      <Form>
        <Row>
          <Col md={{ order: 2 }} className="ml-3 ml-md-5">
            <Message
              success={success}
              error={errorMessage}
            />
          </Col>
          <Col md={{ size: 5, offset: 1, order: 1 }}>
            <Number onChange={handleChange} />
            <Dates onChange={handleChange} />
            <Operations onChange={handleChange} />
            <Buttons
              onSubmit={onSubmit}
              onReset={reset}
            />
          </Col>
        </Row>
      </Form>
      <Row noGutters>
        <Col md={{ offset: 1 }}>
          <ReportTable response={response} />
        </Col>
      </Row>
    </div>
  )
}

export default MotionReportForm