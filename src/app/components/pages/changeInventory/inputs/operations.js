import React, { useEffect, useState } from 'react'
import { Spinner, Input, Label, FormGroup } from 'reactstrap'
import services from '../../../../services/operations'

const Loading = () => <div><Spinner /></div>

const OperationsOptions = ({ operationsList, onChange }) =>
  <Input type="select" name="operation" onChange={onChange}>{operationsList}</Input>

const Operation = (props) => {
  const [operationsList, setOperationsList] = useState([])

  useEffect(() => {
    services
      .getAll()
      .then(operations => {
        const operationListOptions = operations.map((operation, key) =>
          <option key={key}>{operation}</option>
        )
        setOperationsList(operationListOptions)
      })
  }, [])

  let operationElement = operationsList.length === 0 ? <Loading /> :
    <OperationsOptions onChange={props.onChange} operationsList={operationsList} />

  return (
    <FormGroup>
      <Label>Вид операции</Label>
      {operationElement}
    </FormGroup>
  )
}

export default Operation