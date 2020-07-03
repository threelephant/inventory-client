import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import FormLogin from './forms/login'
import FormRegister from './forms/register'

const Auth = ({ type }) => {
  let form;
  if (type === 'login') {
    form = <FormLogin />;
  } else if (type === 'register') {
    form = <FormRegister />;
  } else {
    form = 'Wrong type'
  }

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          {form}
        </Col>
      </Row>
    </Container>
  )
}

export default Auth