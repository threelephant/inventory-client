import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from 'reactstrap'
import Number from './number'
import Operations from './operations'
import Labels from './labels'
import PlacesTo from './placesTo'
import Places from './places'
import ControlButtons from './buttons/controlButtons'
import { Movement, MovementInfo } from '../../includes/inputs/movement'
import services from '../../../services/latestInventory'
import resetTables from '../../includes/utils/resetTables'

const InventoryForm = () => {
  const [item, setItem] = useState({})
  const [number, setNumber] = useState('')
  const [id, setId] = useState('')
  const [success, setSuccess] = useState(-1)
  const [errorMessage, setErrorMessage] = useState([])
  const [chosenDivision, setChosenDivision] = useState('')
  const [newItem, setNewItem] = useState({operation: "Списание"})

  const onChange = e => setNumber(e.target.value)

  const onChangeSelect = (e) => {
    e.preventDefault()
    // eslint-disable-next-line
    if (number === undefined || !(number == parseInt(number))) {
      setErrorMessage(["Заполните инвентарный номер в правильном формате"])
      return
    }

    setErrorMessage([])
    setId(number)
  }

  const setDiv = (value) => {
    setNewItem(previousItem => ({
      ...previousItem,
      division: value
    }))
  }

  const setPlace = (value) => {
    setNewItem(previousItem => ({
      ...previousItem,
      placement: value
    }))
  }
  
  const handleChange = e => {
    const { name, value } = e.target
    setNewItem(previousItem => ({
      ...previousItem,
      [name]: value
    }))
  }

  const Reset = () => {
    setId('')
    setErrorMessage([])
    document.querySelector('form').reset()
    resetTables()
    setChosenDivision('')
    setNewItem({operation: "Списание"})
  }

  useEffect(() => {
    services
      .getLatest(id)
      .then(latestObject => {
        setItem(latestObject)
      })
  }, [id])

  const isValid = (item) => {
    const messages = []

    if (item.object_id === "" || item.object_id === undefined) {
      messages.push('Заполните инвентарный номер')
    }

    if (newItem.division === "" || newItem.division === undefined) {
      messages.push('Заполните отдел')
    }

    if (newItem.placement === "" || newItem.placement === undefined) {
      messages.push('Заполните помещение')
    }

    return messages
  }

  const handleSubmitClick = e => {
    e.preventDefault()

    let error = isValid(item)

    if (error.length !== 0) {
      setErrorMessage(error)
      return
    }

    let newMovement = newItem.movement
    let newMovementInfo = newItem.movement_info

    if (newItem.movement === "" || newItem.movement === undefined) {
      newMovement = item.movement
    }

    if (newItem.movement_info === "" || newItem.movement_info === undefined) {
      newMovementInfo = item.movement_info
    }

    const completedItem = {
      ...item,
      operation: newItem.operation,
      division: newItem.division,
      placement: newItem.placement,
      movement: newMovement,
      movement_info: newMovementInfo,
      date: new Date()
    }

    services
      .create(completedItem)
      .then(() => {
        Reset()
        setSuccess(1)
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
    <Form>
      <Row sm="1" md="2">
        <Col sm="12" md={{ size: 5, offset: 1 }}>
          <Number onClick={onChangeSelect} onChange={onChange} />
          <Labels item={item} />
          <Operations onChange={handleChange} />
          <Places 
            chosenDivision={chosenDivision}
            setChosenDivision={setChosenDivision}
            setDiv={setDiv}
            setPlace={setPlace}
          />
          <Movement onChange={handleChange} />
          <MovementInfo onChange={handleChange} />
        </Col>
        <Col md={{ size: 3, offset: 1 }}>
          <ControlButtons
            onSubmit={handleSubmitClick}
            onReset={Reset}
            success={success}
            error={errorMessage}
          />
        </Col>
      </Row>
    </Form>
  )
}

export default InventoryForm

