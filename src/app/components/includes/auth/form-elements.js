import React from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap'

const Login = ({ setUsername }) => {
  return (
    <FormGroup>
      <Label for="login">Логин</Label>
      <Input type="login" name="login" id="login" onChange={setUsername} />
    </FormGroup>
  )
}

const Password = ({ label, name, setPassword }) => {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input type="password" name={name} id={name} onChange={setPassword} />
    </FormGroup>
  )
}

const ButtonSubmit = ({ title, onClick }) => {
  return (
    <Button onClick={onClick}>{title}</Button>
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