import React from 'react'
import {
  Label, Input, FormGroup
} from 'reactstrap'

const Number = ({ onChange }) => {
  return (
    <FormGroup>
      <Label for="id">Инвентарный номер</Label>
      <Input onChange={onChange} name="object_id" />
    </FormGroup>
  )
}
export default Number