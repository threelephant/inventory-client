import React from 'react'
import { Form } from 'reactstrap'
import { Login, Password, ButtonSubmit, FormHeaders } from '../../includes/auth/form-elements'

const FormRegisterBody = () => {
  return (
    <Form>
      <Login />
      <Password label="Пароль" type="password" />
      <Password label="Повторите пароль" type="rpt-password" />
      <ButtonSubmit title="Регистрация"/>
    </Form>
  )
}

const FormRegister = () => {
  return (
    <div>
      <FormHeaders formTitle="Регистрация"/>
      <FormRegisterBody />
    </div>
  )
}

export default FormRegister