import React from 'react'
import {
  FormGroup, Button, CustomInput
} from 'reactstrap'
import styles from './inventory.module.css'

const IsNewButtons = () => {
  return (
    <FormGroup>
      <div>
        <CustomInput
          type="radio"
          id="New"
          name="isNew"
          label="Новый объект"
        />
        <CustomInput 
          checked={true} 
          readOnly /*  ~~~~   */
          type="radio" 
          id="Exist" 
          name="isNew" 
          label="Существующий объект" 
        />
      </div>
    </FormGroup>
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

const ButtonGroup = (props) => {
  return (
    <FormGroup className="d-flex-inline">
      <Submit onClick={props.onClick} />{' '}
      <Button type="reset" outline color="danger">Очистить</Button>
    </FormGroup>
  )
}

const ButtonForm = (props) => {
  return (
    <div className={`${styles.buttons} d-flex-inline`}>
      <ButtonGroup onClick={props.onClick} />
      <IsNewButtons />
    </div>
  )
}

export default ButtonForm