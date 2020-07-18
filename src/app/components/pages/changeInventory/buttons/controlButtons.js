import React, { } from 'react'
import { FormGroup, Button } from 'reactstrap'
import styles from './inventory.module.css'
import Message from '../../../includes/inputs/alerts'

const ControlButtons = (props) => {
  return (
    <div className={styles.buttons}>
      <FormGroup>
        <Button
          color="primary"
          onClick={props.onSubmit}
        >
          Выполнить операцию
      </Button>{' '}
        <Button
          type="reset"
          color="danger"
          outline
          onClick={props.onReset}
        >
          Очистить
      </Button>
      </FormGroup>
      <Message success={props.success} error={props.error} />
    </div>
  )
}

export default ControlButtons