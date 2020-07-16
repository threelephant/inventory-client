import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

const Division = ({ onChange }) => {
  return (
    <FormGroup>
      <Label for="id">Отдел</Label>
      <Input onChange={onChange} name="object_id" />
    </FormGroup>
  )
}

const Placement = ({ onChange }) => {
  return (
    <FormGroup>
      <Label for="id">Помещение</Label>
      <Input onChange={onChange} name="object_id" />
    </FormGroup>
  )
}

export { Division, Placement }
