import React, { useEffect, useState } from 'react'
import { Spinner, Input, Label, FormGroup } from 'reactstrap'
import services from '../../../../services/services'

const Loading = () => <div><br /><Spinner></Spinner></div>

const OperationsOptions = ({ operationsList }) => 
  <Input type="select">{operationsList}</Input>

const Operation = () => {
  const [ operationsList, setOperationsList ] = useState([])

  useEffect(() => {
    services
      .getOperations()
        .then(operations => {
          const operationListOptions = operations.map((operation, key) => 
            <option key={key}>{operation}</option>
          )
          setOperationsList(operationListOptions)
        })
  }, [])

  let operationElement = operationsList.length === 0 ? <Loading /> :
    <OperationsOptions operationsList={operationsList} />

  return (
    <FormGroup>
      <Label>Вид операции</Label>
      {operationElement}
    </FormGroup>
  )
}

export default Operation