import React from 'react'
import {
  Label, InputGroupAddon, FormGroup, Button, Input, InputGroup
} from 'reactstrap'

const Number = (props) => {
  return (
    <FormGroup>
      <Label for="id">Инвентарный номер</Label>
      <InputGroup>
        <Input
         onChange={props.onChange} 
         name="object_id"
        />
        <InputGroupAddon addonType="append" name="object_id">
          <Button onClick={props.onClick}>Выбрать</Button>
        </InputGroupAddon>
      </InputGroup>
    </FormGroup>
  )
}

export default Number