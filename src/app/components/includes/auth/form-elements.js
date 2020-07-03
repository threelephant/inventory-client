import React from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap'

const Login = () => {
  return (
    <FormGroup>
      <Label for="login">Логин</Label>
      <Input type="login" name="login" id="login" />
    </FormGroup>
  )
}

const Password = ({ label, type }) => {
  return (
    <FormGroup>
      <Label for={type}>{label}</Label>
      <Input type="password" name={type} id={type} />
    </FormGroup>
  )
}

const ButtonSubmit = ({ title }) => {
  return (
    <Button>{title}</Button>
  )
}

const FormHeaders = ({ formTitle }) => {
  return (
    <div>
      <h1>Система инвентаризации</h1>
      <h2>{formTitle}</h2>
    </div>
  )
}

export { Login, Password, ButtonSubmit, FormHeaders }