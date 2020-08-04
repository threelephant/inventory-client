import React, { useState } from 'react'
import { Form } from 'reactstrap'
import { Login, Password, ButtonSubmit, FormHeaders } from '../../includes/auth/form-elements'
import loginService from '../../../services/loginService'

const FormRegisterBody = () => {
  const [item, setItem] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setItem(previousItem => ({
      ...previousItem,
      [name]: value
    }))
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    loginService
      .register(item)
      .then((newItem) => {
        document.querySelector('form').reset()
        setItem({})
        window.location = '/login'
      })
      .catch((response) => {
        console.log(response)
      })
      .finally(() => {

      })
  }

  console.log(item)

  return (
    <Form>
      <Login setUsername={handleChange} />
      <Password setPassword={handleChange} label="Пароль" name="password" />
      <Password setPassword={handleChange} label="Повторите пароль" name="confirm_password" />
      <ButtonSubmit title="Регистрация" onClick={handleLogin} />
    </Form>
  )
}

const FormRegister = () => {
  return (
    <div>
      <FormHeaders formTitle="Регистрация" />
      <FormRegisterBody />
    </div>
  )
}

export default FormRegister