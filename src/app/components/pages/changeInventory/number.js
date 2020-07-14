import React from 'react'
import {
  Label, InputGroupAddon, FormGroup, Button, Input, InputGroup
} from 'reactstrap'

const Number = ({ onClick, onChange }) => {
  return (
    <FormGroup>
      <Label for="id">Инвентарный номер</Label>
      <InputGroup>
        <Input onChange={onChange} name="object_id" />
        <InputGroupAddon addonType="append" name="object_id">
          <Button onClick={onClick}>Выбрать</Button>
        </InputGroupAddon>
      </InputGroup>
    </FormGroup>
  )
}

export default Number