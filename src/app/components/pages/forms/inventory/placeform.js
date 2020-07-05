import React from 'react'
import {
  FormGroup, Label,
  Input, Row, Col} from 'reactstrap'

const Division = () => {
  return (
    <FormGroup>
      <Label>Отдел</Label>
      <Input></Input>
    </FormGroup>
  )
}

const Placement = () => {
  return (
    <FormGroup>
      <Label>Помещение</Label>
      <Input></Input>
    </FormGroup>
  )
}

const PlaceGroupFrom = () => {
  return (
    <div>
      <Label>Откуда</Label>
      <Row noGutters>
        <Col>
          <Division />
        </Col>
        <Col>
          <Placement />
        </Col>
      </Row>
    </div>
  )
}

const PlaceGroupTo = () => {
  return (
    <div>
      <Label>Куда</Label>
      <Row noGutters>
        <Col>
          <Division />
        </Col>
        <Col>
          <Placement />
        </Col>
      </Row>
    </div>
  )
}

export { PlaceGroupFrom, PlaceGroupTo }