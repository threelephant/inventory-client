import React, { useState } from 'react'
import { Collapse, Nav, NavLink, Navbar, NavbarToggler,
   NavbarBrand, NavItem, UncontrolledDropdown, DropdownToggle,
  DropdownMenu, DropdownItem } from 'reactstrap'

const NavbarLinks = () => {
  return (
    <Nav className="mr-auto" navbar>
      <NavItem>
        <NavLink href="/inventory/">Изменение инвертарных карточек</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/object">Поиск материальных объектов</NavLink>
      </NavItem>
      <DropdownReports />
    </Nav>
  )
}

const DropdownReports = () => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
      Отчеты
      </DropdownToggle>
      <DropdownMenu direction="left">
        <DropdownItem href="/">
          Отчет по остаткам
        </DropdownItem>
        <DropdownItem href="/">
          Отчет по движениям
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

const NavBody = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <NavbarLinks />
      </Collapse>
    </div>
  )
}

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md" className="mb-4">
      <NavbarBrand href="/">Инвентаризация</NavbarBrand>
      <NavBody />
    </Navbar>
  )
}

export default Header