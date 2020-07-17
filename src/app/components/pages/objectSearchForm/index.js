import React from 'react'
import { Form, Row, Col, Input, Label, FormGroup, Button } from 'reactstrap'

const ObjectSearchForm = () => {
  return (
    <Form>
      <Row sm="1" md="2">
        <Col sm="12" md={{ size: 4, offset: 1 }}>
          <FormGroup className="mt-5">
            <Button
              color="primary"
            >
              Выполнить операцию
            </Button>{' '}
            <Button
              type="reset"
              color="danger"
              outline
            >
              Очистить
            </Button>
          </FormGroup>
          <FormGroup>
            <Label for="object_id">Инвентарный номер</Label>
            <Input
              name="object_id"
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Название</Label>
            <Input
              name="name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="barcode">Штрих-код</Label>
            <Input
              name="barcode"
            />
          </FormGroup>
        </Col>
        <Col md={{ size: 4, offset: 1 }}>
          <FormGroup>
            <Label for="division">Отдел</Label>
            <Input
              name="division"
            />
          </FormGroup>
          <FormGroup>
            <Label for="placement">Помещение</Label>
            <Input
              name="placement"
            />
          </FormGroup>
          <FormGroup>
            <Label for="movement">Описание движения</Label>
            <Input
              name="movement"
            />
          </FormGroup>
          <FormGroup>
            <Label for="movement_info">Информация о движении</Label>
            <Input
              name="movement_info"
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default ObjectSearchForm