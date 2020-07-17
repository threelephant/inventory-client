import React from 'react'
import { Input, Label, FormGroup } from 'reactstrap'

const MainInformation = ({ onChange }) => {
  return (
    <div>
      <FormGroup>
        <Label for="object_id">Инвентарный номер</Label>
        <Input
          name="object_id"
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Название</Label>
        <Input
          name="name"
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="barcode">Штрих-код</Label>
        <Input
          name="barcode"
          onChange={onChange}
        />
      </FormGroup>
    </div>
  )
}

const Place = ({ onChange }) => {
  return (
    <div>
      <FormGroup>
        <Label for="division">Отдел</Label>
        <Input
          name="division"
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="placement">Помещение</Label>
        <Input
          name="placement"
          onChange={onChange}
        />
      </FormGroup>
    </div>
  )
}

const Movement = ({ onChange }) => {
  return (
    <div>
      <FormGroup>
        <Label for="movement">Описание движения</Label>
        <Input
          name="movement"
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="movement_info">Информация о движении</Label>
        <Input
          name="movement_info"
          onChange={onChange}
        />
      </FormGroup>
    </div>
  )
}

export { MainInformation, Place, Movement }