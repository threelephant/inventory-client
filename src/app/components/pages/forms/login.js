import React from 'react'
import { Form } from 'reactstrap'
import { Login, Password, ButtonSubmit, FormHeaders } from '../../includes/auth/form-elements'

const FormLoginBody = () => {
  return (
    <Form>
      <Login />
      <Password label="Пароль" type="password" />
      <ButtonSubmit title="Войти"/>
    </Form>
  )
}

const FormLogin = () => {
  return (
    <div>
      <FormHeaders formTitle="Авторизация"/>
      <FormLoginBody />
    </div>
  )
}

export default FormLogin