import React from 'react'
import { FormGroup, Button } from 'reactstrap'

const Buttons = ({ onSubmit, onReset }) => {
  return (
    <FormGroup className="mt-md-4">
      <Button
        color="primary"
        onClick={onSubmit}
      >
        Сформировать отчет
    </Button>{' '}
      <Button
        type="reset"
        color="danger"
        outline
        onClick={onReset}
      >
        Очистить
    </Button>
    </FormGroup>
  )
}

export default Buttons