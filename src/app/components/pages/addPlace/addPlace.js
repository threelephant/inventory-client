import React, { useEffect } from 'react'
import Header from '../../includes/header'
import { Container } from 'reactstrap'
import Title from '../../includes/title'
import AddDivision from './forms/addDivision'
import AddPlacement from './forms/addPlacement'

const AddPlace = () => {
  useEffect(() => {
    document.title = "Добавление отдела и помещения"
  }, [])

  return (
    <div>
      <Header />
      <Container fluid className="mb-5">
        <Title title="Добавление отдела и помещения" />
        <AddDivision />
        <AddPlacement />
      </Container>
    </div>
  )
}

export default AddPlace