import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Label, FormGroup, Input } from 'reactstrap'
import Number from './number'
import Operations from './operations'
import { Movement, MovementInfo } from '../../includes/inputs/movement'
import services from '../../../services/latestInventory'

const InventoryForm = () => {
  const [prevItem, setPrevItem] = useState({})
  const [number, setNumber] = useState('')
  const [id, setId] = useState('')

  const onChange = e => setNumber(e.target.value) 

  const onChangeSelect = (e) => {
    e.preventDefault()
    setId(number)
  }

  useEffect(() => {
    services
      .getLatest(id)
      .then(latestObject => {
        setPrevItem(latestObject)
      })
  }, [id])

  console.log(number, prevItem)

  return (
    <Form>
      <Row sm="1" md="2">
        <Col sm="12" md={{ size: 5, offset: 1 }}>
          <Number onClick={onChangeSelect} onChange={onChange} />
          <h5>Название</h5>
          <h5>Описание</h5>
          <h5>Штрих-код</h5>
          <h5>Текущий отдел</h5>
          <h5>Текущее помещение</h5><br />

          <div>
            <Label>Куда</Label>
            <Row noGutters>
              <Col>
                <FormGroup>
                  <Label>Отдел</Label>
                  <Input name="division_to"></Input>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Помещение</Label>
                  <Input name="placement_to"></Input>
                </FormGroup>
              </Col>
            </Row>
          </div>

          <Operations />
          <Movement />
          <MovementInfo />

        </Col>
        <Col md={{ size: 2, offset: 1 }}>
        </Col>
      </Row>
    </Form>
  )
}

export default InventoryForm