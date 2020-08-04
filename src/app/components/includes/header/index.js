import React, { useState } from 'react'
import {
  Collapse, Nav, Navbar, NavbarToggler,
  NavbarBrand, NavItem, NavLink, NavbarText
} from 'reactstrap'
import {
  DropdownInventory,
  DropdownReports, DropdownSearch
} from './dropdowns'

const NavbarLinks = () => {
  return (
    <Nav className="mr-auto" navbar>
      <DropdownInventory />
      <DropdownReports />
      <DropdownSearch />
      <NavItem>
        <NavLink href="/place">
          Добавление отделов и помещений
        </NavLink>
      </NavItem>
    </Nav>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="dark" dark expand="md" className="mb-4">
      <NavbarBrand href="/">Inventory System</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar >
        <NavbarLinks />
        <NavbarText >Hello, {window.localStorage.getItem('username')}&nbsp;&nbsp;</NavbarText>
        <NavbarText>(Logout)</NavbarText>
      </Collapse>
    </Navbar>
  )
}

export default Header