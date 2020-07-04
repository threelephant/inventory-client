import React from 'react'
import { Form, FormGroup, Label, Input, Row, Col, Button, ButtonGroup } from 'reactstrap'
import Operation from './operations'
import Number from './number'

const Name = () => {
  return (
    <FormGroup>
      <Label>Название</Label>
      <Input></Input>
    </FormGroup>
  )
}

const Barcode = () => {
  return (
    <FormGroup>
      <Label>Штрих-код</Label>
      <Input></Input>
    </FormGroup>
  )
}

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

const Description = () => {
  return (
    <FormGroup>
      <Label>Описание объекта</Label>
      <Input type="textarea"></Input>
    </FormGroup>
  )
}

const Movement = () => {
  return (
    <FormGroup>
      <Label>Описание последнего движения объекта</Label>
      <Input type="textarea"></Input>
    </FormGroup>
  )
}

const MovementInfo = () => {
  return (
    <FormGroup>
      <Label>Доп. инфо последнего движения объекта</Label>
      <Input type="textarea"></Input>
    </FormGroup>
  )
}

const ButtonFormGroup = () => {
  return (
    <div className="d-flex justify-content-between">
      <Button color="primary">Выполнить операцию</Button>
      <Button outline color="danger">Очистить</Button>
    </div>
  )
}

const InventoryFormBody = () => {
  return (
    <Form>
      <Number />
      <Name />
      <Operation />
      <PlaceGroupTo />
      <PlaceGroupFrom />
      <Barcode />
      <Description />
      <Movement />
      <MovementInfo />
      <ButtonFormGroup />
    </Form>
  )
}

export default InventoryFormBody