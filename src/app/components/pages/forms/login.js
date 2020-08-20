import React, { useState } from 'react'
import { Alert, Form, ButtonGroup } from 'reactstrap'
import { Login, Password, ButtonSubmit, FormHeaders, ButtonRegister } from '../../includes/auth/form-elements'
import loginService from '../../../services/loginService'

const FormLoginBody = () => {
  const [item, setItem] = useState({})
  const [user, setUser] = useState(null)
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

    try {
      const newItem = await loginService.login({
        auth: {
          "username": item.login, 
          "password": item.password,
        }
      })

      window.localStorage.setItem(
        'loggedUser', newItem.token
      )

      window.localStorage.setItem(
        "username", item.login
      )

      setUser(user)
      setItem({})
      window.location = "/"
    } catch (exception) {
      setIsNotOk(true)
    } finally {
      setTimeout(() => {
        setIsNotOk(false)
      }, 4000)
    }
  }

  return (
    <div>
    <Form>
      <Login setUsername={handleChange} />
      <Password setPassword={handleChange} label="Пароль" name="password" />
      <ButtonGroup>
        <ButtonSubmit title="Войти" onClick={handleLogin} />
        <ButtonRegister />
      </ButtonGroup>
    </Form>
    {isNotOk ? <Alert color="danger" className="mt-4">Неверный логин или пароль</Alert> : <div />}
    </div>
  )
}

const FormLogin = () => {
  return (
    <div>
      <FormHeaders formTitle="Авторизация" />
      <FormLoginBody />
    </div>
  )
}

export default FormLogin