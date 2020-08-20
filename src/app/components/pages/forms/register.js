import React, { useState } from 'react'
import { Alert, ButtonGroup, Form } from 'reactstrap'
import { Login, Password, ButtonSubmit, FormHeaders, ButtonLogin } from '../../includes/auth/form-elements'
import loginService from '../../../services/loginService'

const FormRegisterBody = () => {
  const [item, setItem] = useState({})
  const [isNotOk, setIsNotOk] = useState(false)

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
        setIsNotOk(true)
      })
      .finally(() => {
        setTimeout(() => {
          setIsNotOk(false)
        }, 4000)
      })
  }

  return (
    <Form>
      <Login setUsername={handleChange} />
      <Password setPassword={handleChange} label="Пароль" name="password" />
      <Password setPassword={handleChange} label="Повторите пароль" name="confirm_password" />
      <ButtonGroup>
        <ButtonSubmit title="Регистрация" onClick={handleLogin} />
        <ButtonLogin />
      </ButtonGroup>
      {isNotOk ? <Alert color="danger" className="mt-4">Регистрация невозможна</Alert> : <div />}
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