import React from 'react'
import { Alert, FormGroup, Button } from 'reactstrap'
import styles from './inventory.module.css'

const Success = () => {
  return (
    <Alert color="success">
      Операция успешно выполнена!
    </Alert>
  )
}

const Danger = () => {
  return (
    <Alert color="danger">
      Операция не выполнена!
    </Alert>
  )
}

const Submit = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      type="click"
      color="primary"
      className="mr-2"
    >
      Выполнить операцию
    </Button>
  )
}

const MessagesList = ({ errors }) => {
  let errorsElems = errors.map((error, key) =>
    <div key={key}>&bull; { error }</div> 
  )

  return errorsElems
}

const Message = ({ success, error }) => {
  let message
  if (success === 1) {
    message = <Success />
  } else if (success === 0) {
    message = <Danger />
  } else if (success === -1) {
    if (error.length !== 0) {
      message = <Alert color="danger"><MessagesList errors={error} /></Alert>
    } else {
      message = <div />
    }
  }

  return (
    <div>
      {message}
    </div>
  )
}

const ButtonGroup = (props) => {
  return (
    <div>
      <FormGroup className="d-flex-inline">
        <Submit onClick={props.onClick} />{' '}
        <Button
         type="reset" 
         onClick={props.reset} 
         outline 
         color="danger"
        >
          Очистить
        </Button>
      </FormGroup>
      <Message success={props.success} error={props.error} />
    </div>
  )
}

const ButtonForm = (props) => {
  return (
    <div className={`${styles.buttons} d-flex-inline`}>
      <ButtonGroup
        onClick={props.onClick}
        reset={props.reset}
        success={props.success}
        error={props.error}
      />
    </div>
  )
}

export default ButtonForm