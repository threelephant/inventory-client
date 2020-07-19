import React, { useEffect, useState } from 'react'
import Header from '../../includes/header'
import { Container, Form, FormGroup, Row, Col, Input, Button } from 'reactstrap'
import Message from '../../includes/inputs/alerts'
import Title from '../../includes/title'
import { DivisionTable } from './tables/tables'
import resetTables from './utils/resetTables'
import services from '../../../services/places'
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