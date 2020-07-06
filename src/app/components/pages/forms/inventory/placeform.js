import React from 'react'
import {
  FormGroup, Label,
  Input, Row, Col, Button
} from 'reactstrap'

const PlaceGroupFrom = ({ onChangeDivision, onChangePlacement }) => {
  return (
    <div>
      <Label>Откуда</Label>
      <Row noGutters>
        <Col>
          <FormGroup>
            <Label>Отдел</Label>
            <Input name="division_from" onChange={onChangeDivision}></Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Помещение</Label>
            <Input name="placement_from" onChange={onChangePlacement}></Input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Button>Выбрать</Button>
      </Row>
    </div>
  )
}

const PlaceGroupTo = ({ onChangeDivision, onChangePlacement }) => {
  return (
    <div>
      <Label>Куда</Label>
      <Row noGutters>
        <Col>
          <FormGroup>
            <Label>Отдел</Label>
            <Input name="division" onChange={onChangeDivision}></Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Помещение</Label>
            <Input name="placement" onChange={onChangePlacement}></Input>
          </FormGroup>
        </Col>
      </Row>
      <Row noGutters className="mb-3">
        <Button href="/">Выбрать</Button>
      </Row>
    </div>
  )
}

export { PlaceGroupFrom, PlaceGroupTo }