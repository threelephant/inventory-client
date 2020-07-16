import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from 'reactstrap'
import Number from './number'
import Operations from './operations'
import Labels from './labels'
import PlacesTo from './placesTo'
import ControlButtons from './buttons/controlButtons'
import { Movement, MovementInfo } from '../../includes/inputs/movement'
import services from '../../../services/latestInventory'

const InventoryForm = () => {
  const [item, setItem] = useState({})
  const [number, setNumber] = useState('')
  const [id, setId] = useState('')
  const [success, setSuccess] = useState(-1)
  const [errorMessage, setErrorMessage] = useState([])

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

  const onReset = () => {
    setId('')
    setErrorMessage([])
    document.querySelector('form').reset()
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
  
    if (item.division === "" || item.division === undefined) {
      messages.push('Заполните отдел')
    }
  
    if (item.placement === "" || item.placement === undefined) {
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

    const newItem = {
      ...item,
      date: new Date()
    }

    services
      .create(newItem)
      .then(() => {
        onReset()
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
          <Operations />
          <PlacesTo />
          <Movement />
          <MovementInfo />
        </Col>
        <Col md={{ size: 3, offset: 1 }}>
          <ControlButtons
            onSubmit={handleSubmitClick}
            onReset={onReset}
            success={success}
            error={errorMessage}
          />
        </Col>
      </Row>
    </Form>
  )
}

export default InventoryForm

