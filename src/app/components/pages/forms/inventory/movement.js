import React from 'react'
import {
  FormGroup, Label,
  Input} from 'reactstrap'

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

export { Movement, MovementInfo }