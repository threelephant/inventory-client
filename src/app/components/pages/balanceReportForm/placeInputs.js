import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

const Division = ({ onChange, isDisabled }) => {
  return (
    <FormGroup>
      <Label for="id">Отдел</Label>
      <Input disabled={isDisabled} onChange={onChange} name="object_id" />
    </FormGroup>
  )
}

const Placement = ({ onChange, isDisabled }) => {
  return (
    <FormGroup>
      <Label for="id">Помещение</Label>
      <Input disabled={isDisabled} onChange={onChange} name="object_id" />
    </FormGroup>
  )
}

export { Division, Placement }
