import React, { useEffect, useState } from 'react'
import Header from '../../includes/header'
import { Container, Form, FormGroup, Row, Col, Input, Label, Button } from 'reactstrap'
import Title from '../../includes/title'

/* TODO: Change this function */
const FormPlace = (props) => {
  const [placeItem, setPlaceItem] = useState({})

  const setPlace = (e) => {
    const { name, value } = e.target
    setPlaceItem({ [name]: value })
  } 

  const onSubmit = (e) => {
    e.preventDefault()

    
  }

  return (
    <Row>
      <Col sm="12" md={{ size: 4, offset: 1 }} className="mb-4">
        <Form>
          <FormGroup>
            <Label>{props.label}</Label>
            <Input
             onChange={setPlace}
             name={props.type}
            />
          </FormGroup>
            <FormGroup>
              <Button
               onClick={onSubmit} 
               color="primary"
              >
                Добавить
              </Button>
            </FormGroup>
        </Form>
      </Col>
    </Row>
  )
}

const AddDivision = () => {
  useEffect(() => {
    document.title = "Добавление отдела и помещения"
  }, [])

  return (
    <div>
      <Header />
      <Container fluid className="mb-5">
        <Title title="Добавление отдела и помещения" />
        <FormPlace
          label="Отдел"
          type="division"
        />
        <FormPlace
          label="Помещение"
          type="placement"
        />
      </Container>
    </div>
  )
}

export default AddDivision