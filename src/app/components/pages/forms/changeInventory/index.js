import React, { useState } from 'react'
import { Form, Row, Col, Input, Modal, 
  ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const InventoryForm = () => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <Form>
      <Row sm="1" md="2">
        <Col sm="12" md={{ size: 5, offset: 1 }}>
          <div>
            <Button onClick={toggle}>Выбрать инвентарный номер</Button>
            <Modal isOpen={modal} size="lg">
              <ModalHeader>Выбрать инвентарный номер</ModalHeader>
              <ModalBody>
                <table>
                  <thead><tr><th></th></tr></thead>
                  {Array(20).fill().map((item, index) => 
                    <tr key={index}><td>test</td></tr>
                  )}
                </table>
              </ModalBody>
              <ModalFooter>
                <Button onClick={toggle}>Выбрать</Button>
              </ModalFooter>
            </Modal>
          </div>
        </Col>
        <Col md={{ size: 2, offset: 1 }}>
        </Col>
      </Row>
    </Form>
  )
}

export default InventoryForm