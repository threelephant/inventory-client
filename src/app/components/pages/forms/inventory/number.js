import React from 'react'
import { Label, Input, Button, InputGroup,
   InputGroupAddon, FormGroup } from 'reactstrap'

const Number = () => {
  return (
    <FormGroup>
      <Label for="id">Инвентарный номер</Label>
      <InputGroup>
        <Input name="id" />
        <InputGroupAddon addonType="append">
          <Button href="/object">Выбрать</Button>
        </InputGroupAddon>
      </InputGroup>
    </FormGroup>
  )
}
export default Number