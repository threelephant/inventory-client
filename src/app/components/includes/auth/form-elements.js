import React from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap'

const Login = ({ setUsername }) => {
  return (
    <FormGroup>
      <Label for="login">Логин</Label>
      <Input type="login" name="username" id="login" onChange={setUsername} />
    </FormGroup>
  )
}

const Password = ({ label, type, setPassword }) => {
  return (
    <FormGroup>
      <Label for={type}>{label}</Label>
      <Input type="password" name={type} id={type} onChange={setPassword} />
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