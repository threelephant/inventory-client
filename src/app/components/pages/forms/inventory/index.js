import React, { useState } from 'react'
import { Form, Row, Col } from 'reactstrap'
import Operation from './operations'
import Number from './number'
import { PlaceGroupFrom, PlaceGroupTo } from './placeform'
import ButtonForm from './buttons'
import { Movement, MovementInfo } from './movement'
import { Name, Barcode, Description } from './textelements'

const InventoryFormBody = (props) => {
  return (
    <div>
      <Number onChange={props.number} />
      <Name onChange={props.object} />
      <Operation onChange={props.operation} />
      <PlaceGroupFrom />
      <PlaceGroupTo />
      <Barcode />
      <Description />
      <Movement />
      <MovementInfo />
    </div>
  )
}

const InventoryForm = () => {
  const [ objectId, setObjectId ] = useState('')
  const [ name, setName ] = useState('')
  const [ operation, setOperation ] = useState('') 

  const handleSubmitClick = () => {
    console.log('clicked')
  }

  const setNumber = (event) => setObjectId(event.target.value)
  const setObjectName = (event) => setName(event.target.value)
  const setOp = (event) => setOperation(event.target.value)

  return (
    <Form>
      <Row sm="1" md="2">
        <Col sm="12" md={{ size: 5, offset: 1 }}>
          <InventoryFormBody 
            number={setNumber}
            object={setObjectName}
            operation={setOp}
          />
        </Col>
        <Col md={{ size: 2, offset: 1 }}>
          <ButtonForm onClick={handleSubmitClick} />
        </Col>
      </Row>
    </Form>
  )
}

export default InventoryForm