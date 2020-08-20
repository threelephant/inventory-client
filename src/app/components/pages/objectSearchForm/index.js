import React, { useState } from 'react'
import { Form, Row, Col } from 'reactstrap'
import SubmitButtons from './buttons'
import { MainInformation, Place, Movement } from './inputs'
import Table from './table/table'
import services from '../../../services/objectSearch'

const ObjectSearchForm = () => {
  const [ item, setItem ] = useState({})
  const [ response, setResponse ] = useState([]) 

  const handleChange = e => {
    const { name, value } = e.target
    setItem(previousItem => ({
      ...previousItem,
      [name]: value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    services
      .search(item)
      .then(response => {
        setResponse(response)
      })
      .catch(reason => {
      })
      .finally(onfinally => {
      })
  }
  
  const reset = () => {
    setItem({})
    setResponse([])
  }

  console.log(item, response)

  return (
    <div>
      <Form>
        <Row sm="1" md="2" className="mb-5">
          <Col sm="12" md={{ size: 4, offset: 1 }}>
            <div className="d-flex flex-column flex-md-column-reverse">
              <SubmitButtons
                onSubmit={onSubmit}
                reset={reset}   
              />
              <MainInformation onChange={handleChange} />
            </div>
          </Col>
          <Col md={{ size: 4, offset: 1 }}>
            <Place onChange={handleChange}  />
            <Movement onChange={handleChange}  />
          </Col>
        </Row>
      </Form>
      <Row>
        <Col md={{ size: 9, offset: 1 }}>
          <Table
            result={response}
          />
        </Col>
      </Row>
    </div>
  )
}

export default ObjectSearchForm