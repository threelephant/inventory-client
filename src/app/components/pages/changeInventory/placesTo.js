import React, {  } from 'react'
import { Row, Col, Label, FormGroup, Input } from 'reactstrap'

const PlacesTo = () => {
  return (
    <div>
      <Label>Куда</Label>
      <Row noGutters>
        <Col>
          <FormGroup>
            <Label>Отдел</Label>
            <Input name="division_to"></Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Помещение</Label>
            <Input name="placement_to"></Input>
          </FormGroup>
        </Col>
      </Row>
    </div>
  )
}

export default PlacesTo