import React from 'react'
import {
  FormGroup, Label,
  Input} from 'reactstrap'

const Name = ({ onChange }) => {
  return (
    <FormGroup>
      <Label>Название</Label>
      <Input onChange={onChange}></Input>
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

const Description = () => {
  return (
    <FormGroup>
      <Label>Описание объекта</Label>
      <Input type="textarea"></Input>
    </FormGroup>
  )
}

export { Name, Barcode, Description }