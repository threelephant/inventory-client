import React, { useState } from 'react'
import { Form } from 'reactstrap'
import { Login, Password, ButtonSubmit, FormHeaders } from '../../includes/auth/form-elements'
import loginService from '../../../services/loginService'

const FormLoginBody = () => {
  const [item, setItem] = useState({})
  const [user, setUser] = useState(null)

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
      
    }
  }

  console.log(user, item)

  return (
    <Form>
      <Login setUsername={handleChange} />
      <Password setPassword={handleChange} label="Пароль" name="password" />
      <ButtonSubmit title="Войти" onClick={handleLogin} />
    </Form>
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