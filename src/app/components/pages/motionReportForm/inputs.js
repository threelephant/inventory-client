import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

const Number = ({ onChange }) => {
  return (
    <FormGroup>
      <Label for="object_id">Инвентарный номер</Label>
      <Input
        name="object_id"
        onChange={onChange}
      />
    </FormGroup>
  )
}

const Dates = ({ onChange }) => {
  return (
    <div>
      <FormGroup>
        <Label for="begin">С даты</Label>
        <Input
          type="date"
          name="begin"
          id="begin"
          placeholder="date placeholder"
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="end">По дату</Label>
        <Input
          type="date"
          name="end"
          id="end"
          placeholder="date placeholder"
          onChange={onChange}
        />
      </FormGroup>
    </div>
  )
}

export { Number, Dates }