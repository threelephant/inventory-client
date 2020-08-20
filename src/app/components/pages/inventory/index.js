import React, { useState } from 'react'
import { Form, Row, Col } from 'reactstrap'
import Number from './number'
import ButtonForm from './buttons/buttons'
import { Movement, MovementInfo } from '../../includes/inputs/movement'
import { Name, Barcode, Description } from './textelements'
import resetTables from './utils/resetTables'
import isValid from './utils/validation'
import PlaceForm from './places'
import inventoryService from '../../../services/inventory'

const InventoryFormBody = (props) => {
  return (
    <div>
      <Number onChange={props.number} />
      <Name onChange={props.name} />
      <hr />
      <PlaceForm
        setDiv={props.divTo}
        setPlace={props.placeTo}
        chosenDivision={props.chosenDivision}
        setChosenDivision={props.setChosenDivision}
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
  const [errorMessage, setErrorMessage] = useState([])
  const [chosenDivision, setChosenDivision] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setItem(previousItem => ({
      ...previousItem,
      [name]: value
    }))
  }

  console.log(item)

  const reset = () => {
    setItem({ operation: "Приход" })
    document.querySelector('form').reset()
    resetTables()
    setErrorMessage([])
    setChosenDivision('')
  }

  const handleSubmitClick = e => {
    e.preventDefault()

    let error = isValid(item)

    if (error.length !== 0) {
      setErrorMessage(error)
      return
    }

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

  return (
    <Form>
      <Row sm="1" md="2">
        <Col sm="12" md={{ size: 5, offset: 1 }}>
          <InventoryFormBody
            number={handleChange}
            name={handleChange}
            divTo={setItem}
            placeTo={setItem}
            barcode={handleChange}
            desc={handleChange}
            move={handleChange}
            moveInfo={handleChange}
            chosenDivision={chosenDivision}
            setChosenDivision={setChosenDivision}
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