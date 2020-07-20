import React from 'react'
import Header from '../includes/header'
import { Container } from 'reactstrap'

const Page = () => {
  return (
    <div>
      <Header />
      <Container fluid className="mb-5 text-danger">
        <h1 className="display-1">
          404 Error
        </h1>
      </Container>
    </div>
  )
}

export default Page