import React from 'react'
import {
  FormGroup, Label,
  Input} from 'reactstrap'

const Movement = ({ onChange }) => {
  return (
    <FormGroup>
      <Label>Описание последнего движения объекта</Label>
      <Input name="movement" type="textarea" onChange={onChange}></Input>
    </FormGroup>
  )
}

const MovementInfo = ({ onChange }) => {
  return (
    <FormGroup>
      <Label>Доп. инфо последнего движения объекта</Label>
      <Input name="movement_info" type="textarea" onChange={onChange}></Input>
    </FormGroup>
  )
}

export { Movement, MovementInfo }