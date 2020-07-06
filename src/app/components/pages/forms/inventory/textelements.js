import React from 'react'
import {
  FormGroup, Label,
  Input} from 'reactstrap'

const Name = ({ onChange }) => {
  return (
    <FormGroup>
      <Label>Название</Label>
      <Input name="name" onChange={onChange}></Input>
    </FormGroup>
  )
}

const Barcode = ({ onChange }) => {
  return (
    <FormGroup>
      <Label>Штрих-код</Label>
      <Input name="barcode" onChange={onChange} />
    </FormGroup>
  )
}

const Description = ({ onChange }) => {
  return (
    <FormGroup>
      <Label>Описание объекта</Label>
      <Input name="description" type="textarea" onChange={onChange}></Input>
    </FormGroup>
  )
}

export { Name, Barcode, Description }