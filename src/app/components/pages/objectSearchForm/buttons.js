import React from 'react'
import { FormGroup, Button } from 'reactstrap'

const SubmitButtons = ({ onSubmit, reset }) => {
  return (
    <FormGroup className="mt-md-5">
      <Button 
        color="primary"
        onClick={onSubmit}
      >
        Найти
      </Button>{' '}
      <Button 
        type="reset" 
        color="danger" 
        outline
        onClick={reset}
      >
        Очистить
      </Button>
    </FormGroup>
  )
}

export default SubmitButtons