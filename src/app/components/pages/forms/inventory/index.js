import React, { useState } from 'react'
import { Form, Row, Col } from 'reactstrap'
import Number from './number'
import { PlaceGroupTo } from './placeform'
import ButtonForm from './buttons/buttons'
import { Movement, MovementInfo } from './movement'
import { Name, Barcode, Description } from './textelements'
import isValid from './utils/validation'
import inventoryService from '../../../../services/inventory'

const InventoryFormBody = (props) => {
  return (
    <div>
      <Number onChange={props.number} />
      <Name onChange={props.name} />
      <hr />
      <PlaceGroupTo
        onChangeDivision={props.divTo}
        onChangePlacement={props.placeTo}
      />
      <hr />
      <Barcode onChange={props.barcode} />
      <Description onChange={props.desc} />
      <hr />
      <Movement onChange={props.move} />
      <MovementInfo onChange={props.moveInfo} />
    </div>
  )
}

const InventoryForm = () => {
  const [item, setItem] = useState({ operation: "Приход" })
  const [success, setSuccess] = useState(-1)
  const [valid, setValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])

  const handleChange = e => {
    const { name, value } = e.target
    setItem(previousItem => ({
      ...previousItem,
      [name]: value
    }))
  }

  const reset = () => {
    setItem({ operation: "Приход" })
    document.querySelector('form').reset()
    setErrorMessage([])
  }

  const handleSubmitClick = e => {
    e.preventDefault()

    let error = isValid(item)

    if (error.length !== 0) {
      setErrorMessage(error)
      setValid(false)
      return
    }

    setValid(true)

    inventoryService
      .create(item)
      .then(response => {
        setSuccess(1)
        reset()
      })
      .catch(reason => {
        setSuccess(0)
      })
      .finally(onfinally => {
        setTimeout(() => {
          setSuccess(-1)
        }, 4000)
      })
  }

  console.log(valid, item)

  return (
    <Form>
      <Row sm="1" md="2">
        <Col sm="12" md={{ size: 5, offset: 1 }}>
          <InventoryFormBody
            number={handleChange}
            name={handleChange}
            divTo={handleChange}
            placeTo={handleChange}
            barcode={handleChange}
            desc={handleChange}
            move={handleChange}
            moveInfo={handleChange}
          />
        </Col>
        <Col md={{ size: 2, offset: 1 }}>
          <ButtonForm
            onClick={handleSubmitClick}
            reset={reset}
            success={success}
            error={errorMessage}
          />
        </Col>
      </Row>
    </Form>
  )
}

export default InventoryForm