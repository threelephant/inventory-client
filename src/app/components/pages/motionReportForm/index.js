import React, { useState } from 'react'
import { Form, Row, Col } from 'reactstrap'
import Operations from '../../includes/inputs/operations'
import { Number, Dates } from './inputs'
import Buttons from './buttons'
import ReportTable from './table'
import services from '../../../services/motionReport'

const MotionReportForm = () => {
  const [item, setItem] = useState({ operation: "Списание" })
  const [response, setResponse] = useState([])

  const handleChange = e => {
    const { name, value } = e.target
    setItem(previousItem => ({
      ...previousItem,
      [name]: value
    }))
  }

  const reset = () => {
    setItem({ operation: "Списание" })
    setResponse([])
    document.querySelector('form').reset()
  }

  const onSubmit = (e) => {
    e.preventDefault()
    /* eslint-disable eqeqeq */
    if (item.object_id === undefined 
      || !(item.object_id == parseInt(item.object_id))) {
        console.log('Заполните инвентарный номер в правильном формате')
    }

    if (item.begin > item.end) {
      console.log('Конечная дата раньше начальной даты')
      return
    }

    services
      .send(item)
      .then(response => {
        setResponse(response)
        reset()
      })
      .catch(reason => {
        // setResponse(reason)
      })
      .finally(onfinally => {
      })
  }

  return (
    <div>
      <Form>
        <Row>
          <Col md={{ size: 5, offset: 1 }}>
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
      <ReportTable />
    </div>
  )
}

export default MotionReportForm